port module Trips.Main exposing (..)

import Navigation exposing (Location)
import Trips.Model exposing (Model, initModel)
import Trips.Routing exposing (parseLocation)
import Trips.View exposing (view)
import Trips.Messages exposing (..)
import Trips.Ports exposing (addTrip, openTrip, addPlace)
import Trips.Commands exposing (postTrip, fetchAll, deleteTrip)

init : Location -> ( Model, Cmd Msg )
init location =
  let
    currentRoute =
      parseLocation location
  in
    ( initModel currentRoute, fetchAll )


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
  case msg of
    OnLocationChange location ->
      let
        newRoute =
          parseLocation location
      in
        ( { model | route = newRoute }, openTrip location )

    ChangeTripName newName ->
                         ( { model
                             | tripName = newName
                         }, Cmd.none )

    ChangePlaceName newName ->
      ( { model
          | placeName = newName
      }, Cmd.none )

    AddTrip ->
      let tripId =
            toString (List.length model.trips + 1)
          newTrip =
            { name = model.tripName
            , id = tripId }
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

    AddPlace ->
      let placeId =
            toString (List.length model.places + 1)
          newPlace =
            { name = model.placeName
            , id = placeId }
      in
      ( { model
          | places = List.append model.places [newPlace]
          , placeName = ""
      }
      , addPlace newPlace )

    OnInsertTrip (Ok insertedTrip) ->
        ( model, Cmd.none )

    OnFetchAllTrips (Ok fetchedTrips) ->
        ( { model
              | trips = fetchedTrips
        }, Cmd.none )

    OnRemoveTrip (Ok removedTrip) ->
        ( model, Cmd.none )

    OnRemoveTrip (Err error) ->
        ( model, Cmd.none )

    OnFetchAllTrips (Err error) ->
        ( model, Cmd.none )

    OnInsertTrip (Err error) ->
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