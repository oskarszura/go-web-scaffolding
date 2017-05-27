port module Trips.Main exposing (..)

import Navigation exposing (Location)
import Array exposing (get, fromList)
import Trips.Model exposing (..)
import Trips.Routing exposing (parseLocation)
import Trips.View exposing (view)
import Trips.Messages exposing (..)
import Trips.Commands exposing (postTrip, fetchTrips, deleteTrip, postPlace, fetchPlaces)

init : Location -> ( Model, Cmd Msg )
init location =
  let
    currentRoute = parseLocation location
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
    OnLocationChange location ->
      let
        newRoute = parseLocation location
      in
        case newRoute of
              TripsRoute ->
                  ({ model
                     | route = newRoute
                   }, Cmd.none )

              TripRoute id ->
                  let
                    trip = get (id - 1) (fromList model.trips)
                  in
                    case trip of
                      Just trp ->
                        ({ model
                           | route = newRoute
                           , places = trp.places
                        }, Cmd.none )
                      Nothing ->
                        ({ model
                           | route = newRoute
                        }, Cmd.none )

              NotFoundRoute ->
                  ({ model
                     | route = newRoute
                  }, Cmd.none )

    ChangeTripName newName ->
      ({ model
         | tripName = newName
      }, Cmd.none)

    ChangePlaceName newName ->
      ({ model
         | placeName = newName
      }, Cmd.none)

    ChangePlaceDescription description ->
      ({ model
         | placeDescription = description
      }, Cmd.none)

    AddTrip ->
      let tripId =
            toString (List.length model.trips + 1)
          newTrip =
            { name = model.tripName
            , id = tripId
            , places = []}
      in
      ( { model
          | trips = List.append model.trips [newTrip]
          , tripName = ""
      }
      , postTrip newTrip )

    RemoveTrip id ->
      let updatedTrips =
            List.filter (\t -> t.id == id) model.trips
      in
        ( { model
            | trips = updatedTrips
        }
        , deleteTrip id )

    OnInsertTrip (Ok insertedTrip) ->
        ( model, Cmd.none )

    OnInsertTrip (Err error) ->
        ( model, Cmd.none )

    OnRemoveTrip (Ok removedTrip) ->
        ( model, Cmd.none )

    OnRemoveTrip (Err error) ->
        ( model, Cmd.none )

    OnFetchAllTrips (Ok fetchedTrips) ->
        ( { model
              | trips = fetchedTrips
        }, Cmd.none )

    OnFetchAllTrips (Err error) ->
        ( model, Cmd.none )

    AddPlace tripId ->
      let placeId =
            toString (List.length model.places + 1)
          newPlace =
            { name = model.placeName
            , id = placeId
            , tripId = tripId
            , description = model.placeDescription }
      in
      ( { model
          | places = List.append model.places [newPlace]
          , placeName = ""
          , placeDescription = ""
      }
      , postPlace newPlace )

    OnInsertPlace (Ok insertedPlace) ->
        ( model, Cmd.none )

    OnInsertPlace (Err error) ->
        ( model, Cmd.none )

    OnFetchAllPlaces (Ok fetchedPlaces) ->
        ( { model
              | places = fetchedPlaces
        }, Cmd.none )

    OnFetchAllPlaces (Err error) ->
        ( model, Cmd.none )

    NoOp ->
        ( model, Cmd.none )


subscriptions : Model -> Sub Msg
subscriptions model =
  Sub.none


main : Program Never Model Msg
main =
  Navigation.program OnLocationChange
    { init = init
    , view = view
    , update = update
    , subscriptions = subscriptions
    }