port module Trips.Main exposing (..)

import Navigation exposing (Location)
import Task exposing (perform)
import Time exposing (Time)

import Trips.Model exposing (..)
import Trips.Routing exposing (parseLocation)
import Trips.View exposing (view)
import Trips.Messages exposing (..)
import Trips.Subscriptions exposing (..)
import Trips.Commands exposing (postTrip, fetchTrips, updateTrip, deleteTrip, postPlace, fetchPlaces, deletePlace)
import Trips.Utilities exposing (valueFromMaybe)

import Debug exposing (..)

init : Location -> ( Model, Cmd Msg )
init location =
  let
    currentRoute =
      parseLocation location
  in
    case currentRoute of
      TripsRoute ->
        (initModel currentRoute, fetchTrips)

      TripRoute id ->
        (initModel currentRoute, fetchTrips)

      NotFoundRoute ->
        (initModel currentRoute, fetchTrips)


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
  case msg of
    ChangeTripName tripName ->
      ( { model | tripName = tripName }, Cmd.none)

    ChangePlaceName placeName ->
      ( { model | placeName = placeName }, Cmd.none)

    ChangePlaceDescription description ->
      ( { model | placeDescription = description }, Cmd.none)

    AddTrip ->
        let
            newTrip =
              { id = ""
              , name = model.tripName
              , places = []}
        in
            ( model, postTrip newTrip )

    UpdateTrip updatedTrip tripId ->
        ( model, updateTrip updatedTrip )

    RemoveTrip tripId ->
      let
        updatedTrips =
            model.trips
                |> List.filter (\trip -> trip.id == tripId)
      in
        ( { model | trips = updatedTrips }, deleteTrip tripId )

    OnInsertTrip (Ok createdTrip) ->
        let
            newTrip =
              { id = createdTrip.id
              , name = createdTrip.name
              , places = createdTrip.places }
        in
            ( { model
                | trips = List.append model.trips [newTrip]
                , tripName = ""
            }
            , Cmd.none )

    OnInsertTrip (Err error) ->
        ( model, Cmd.none )

    OnUpdateTrip (Ok updatedTrip) ->
        ( model, Cmd.none )

    OnUpdateTrip (Err error) ->
        ( model, Cmd.none )

    OnRemoveTrip (Ok removedTrip) ->
        ( model, Cmd.none )

    OnRemoveTrip (Err error) ->
        ( model, Cmd.none )

    OnFetchAllTrips (Ok fetchedTrips) ->
        case model.route of
          TripsRoute ->
            ( { model | trips = fetchedTrips }, Cmd.none )

          TripRoute tripId ->
            let
              trip =
                fetchedTrips
                    |> List.filter (\trip -> trip.id == tripId)
                    |> List.head
            in
              case trip of
                Just trp ->
                  ( ({ model
                        | trips = fetchedTrips
                        , places = trp.places
                  })
                  , Cmd.none )
                Nothing ->
                    ( ({ model | trips = fetchedTrips }), Cmd.none )

          NotFoundRoute ->
            ( { model | trips = fetchedTrips }, Cmd.none )

    OnFetchAllTrips (Err error) ->
        ( model, Cmd.none )

    AddPlace tripId ->
        let
            newPlace =
              { name = model.placeName
              , id = ""
              , tripId = tripId
              , description = model.placeDescription
              , order = List.length model.places }
        in
            ( model, postPlace newPlace )

    OnInsertPlace (Ok createdPlace) ->
        let
            newPlace =
              { name = createdPlace.name
              , id = createdPlace.id
              , tripId = createdPlace.tripId
              , description = createdPlace.description
              , order = createdPlace.order }
        in
            ( { model
                  | places = List.append model.places [newPlace]
                  , placeName = ""
                  , placeDescription = ""
            }
            , Cmd.none )

    OnInsertPlace (Err error) ->
        ( model, Cmd.none )

    RemovePlace placeId ->
      ( model, deletePlace placeId )

    OnRemovePlace placeId (Ok removedPlace) ->
      let
        updatedPlaces =
            model.places
                |> List.filter (\place-> place.id /= placeId)
      in
        ( { model | places = updatedPlaces }, Cmd.none )

    OnRemovePlace placeId (Err error) ->
        ( model, Cmd.none )

    OnFetchAllPlaces (Ok fetchedPlaces) ->
        ( { model | places = fetchedPlaces }, Cmd.none )

    OnFetchAllPlaces (Err error) ->
        ( model, Cmd.none )

    PlaceDragEnd position ->
        ( { model | drag = "" }, Cmd.none )

    PlaceDragStart placeId ->
        ( { model | drag = placeId }, Cmd.none )

    PlaceDrop tripId hoveredPlaceId ->
        if model.drag /= "" then
            let
                draggedPlace =
                   model.places
                        |> List.filter (\place -> place.id == model.drag)
                        |> List.head
                        |> valueFromMaybe
                hoveredPlace =
                   model.places
                        |> List.filter (\place -> place.id == hoveredPlaceId)
                        |> List.head
                        |> valueFromMaybe
                sortedPlaces =
                    model.places
                        |> List.map (\place ->
                            if place.order >= hoveredPlace.order
                            then { place | order = place.order + 1 }
                            else place)
                        |> List.map (\place ->
                            if place.id == draggedPlace.id
                            then { place | order = hoveredPlace.order }
                        else place)
                updatingTrip =
                    model.trips
                        |> List.filter (\trip -> trip.id == tripId)
                        |> List.head
            in
                case updatingTrip of
                    Just trp ->
                        let
                            updatedTrip =
                                { trp | places = log "x" sortedPlaces }
                        in
                            ( { model | places = sortedPlaces }, Task.perform (\l -> (UpdateTrip updatedTrip tripId)) Time.now)
                    Nothing ->
                        ( model, Cmd.none )
        else
            ( model, Cmd.none )

    MouseMsg position ->
        ( { model
            | mousex = position.x
            , mousey = position.y
        }
        , Cmd.none )

    OnLocationChange location ->
      let
        newRoute =
          parseLocation location
      in
        case newRoute of
          TripsRoute ->
            ( { model | route = newRoute }, Cmd.none )

          TripRoute tripId ->
            let
              trip =
                model.trips
                    |> List.filter (\trip -> trip.id == tripId)
                    |> List.head
            in
              case trip of
                Just trp ->
                  ( { model
                    | route = newRoute
                    , places = trp.places
                  }
                  , Cmd.none )
                Nothing ->
                  ( { model
                        | route = newRoute
                  }
                  , Cmd.none )

          NotFoundRoute ->
            ( { model | route = newRoute }, Cmd.none )

    NoOp ->
        ( model, Cmd.none )


main : Program Never Model Msg
main =
  Navigation.program OnLocationChange
    { init = init
    , view = view
    , update = update
    , subscriptions = subscriptions
    }