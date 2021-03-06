port module Trips.Main exposing (..)

import Navigation exposing (Location)

import Trips.Model exposing (..)
import Trips.Routing exposing (parseLocation)
import Trips.View exposing (view)
import Trips.Messages exposing (..)
import Trips.Subscriptions exposing (..)
import Trips.Commands exposing (postTrip, fetchTrips, updateTrip, deleteTrip, postPlace, updatePlace, fetchPlaces, deletePlace)
import Trips.Utilities exposing (valueFromMaybe)

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

    ChangeTripCode tripCode ->
      ( { model | tripCode = tripCode }, Cmd.none)

    ChangePlaceName placeName ->
      ( { model | placeName = placeName }, Cmd.none)

    ChangePlaceDescription description ->
      ( { model | placeDescription = description }, Cmd.none)

    AddTrip ->
      let
        newTrip =
          { id = ""
          , name = model.tripName
          , code = model.tripCode
          , places = []}
      in
        ( model, postTrip newTrip )

    UpdateTrip updatedTrip ->
        ( model, updateTrip updatedTrip )

    RemoveTrip tripId ->
        ( model, deleteTrip tripId )

    OnInsertTrip (Ok createdTrip) ->
      let
        newTrip =
          { id = createdTrip.id
          , name = createdTrip.name
          , code = createdTrip.code
          , places = createdTrip.places }
      in
        ( { model
          | trips = List.append model.trips [newTrip]
          , tripName = ""
          , tripCode = ""
        }
        , Cmd.none )

    OnInsertTrip (Err error) ->
      ( model, Cmd.none )

    OnUpdateTrip (Ok updatedTrip) ->
      let
        updatedTrips =
          List.map (\trip ->
            if trip.id == updatedTrip.id
            then updatedTrip
            else trip)
          model.trips
      in
        ( { model | trips = updatedTrips }, Cmd.none )

    OnUpdateTrip (Err error) ->
      ( model, Cmd.none )

    OnRemoveTrip tripId (Ok removedTrip) ->
      let
        updatedTrips =
            model.trips
                |> List.filter (\trip -> trip.id /= tripId)
      in
        ( { model | trips = updatedTrips }, Cmd.none )

    OnRemoveTrip tripId (Err error) ->
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

    EditTripName trip ->
      ( { model
        | editedTrip = trip
        , tripName = trip.name
        , tripCode = trip.code }, Cmd.none )

    UpdateTripName trip ->
      update (UpdateTrip { trip
                            | name = model.tripName
                            , code = model.tripCode
                         } )
                         { model | editedTrip = { id = "", name = "", code = "", places = []} }

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

    EditPlace place ->
      ( { model | editedPlace = place }, Cmd.none )

    EditPlaceName placename ->
      let
        updatedEditedPlace =
          { id = model.editedPlace.id
          , tripId = model.editedPlace.tripId
          , name = placename
          , description = model.editedPlace.description
          , order = model.editedPlace.order }
      in
        ( { model | editedPlace = updatedEditedPlace }, Cmd.none )

    EditPlaceDescription placedescription ->
      let
        updatedEditedPlace =
          { id = model.editedPlace.id
          , tripId = model.editedPlace.tripId
          , name = model.editedPlace.name
          , description = placedescription
          , order = model.editedPlace.order }
      in
      ( { model | editedPlace = updatedEditedPlace }, Cmd.none )

    UpdatePlace place ->
      let
        updatedPlace =
          { id = place.id
          , tripId = place.tripId
          , name = model.editedPlace.name
          , description = model.editedPlace.description
          , order = place.order
          }
      in
        ( { model | editedPlace = { id = "", tripId = "", name = "", description = "", order = 0 } }, updatePlace updatedPlace )

    OnUpdatePlace (Ok updatedPlace) ->
      let
        updatedPlaces =
          List.map (\place ->
            if place.id == updatedPlace.id
            then updatedPlace
            else place)
          model.places
      in
        ( { model | places = updatedPlaces }, Cmd.none )

    OnUpdatePlace (Err error) ->
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

    PlaceDragThrough placeId ->
      if placeId /= model.drag then
        ( { model | hoveredPlace = placeId }, Cmd.none )
      else
        ( model, Cmd.none )

    PlaceDragEnd position ->
      ( { model | drag = "" }, Cmd.none )

    PlaceDragStart placeId ->
      ( { model | drag = placeId }, Cmd.none )

    PlaceDrop tripId ->
      if model.drag /= "" then
        let
          draggedPlace =
            model.places
              |> List.filter (\place -> place.id == model.drag)
              |> List.head
              |> valueFromMaybe
          hoveredPlace =
            model.places
              |> List.filter (\place -> place.id == model.hoveredPlace)
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
                    { trp | places = sortedPlaces }
              in
                ( { model
                    | places = sortedPlaces
                    , hoveredPlace = "" }, updateTrip updatedTrip)
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
