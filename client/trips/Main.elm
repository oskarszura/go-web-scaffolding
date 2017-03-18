port module Trips.Main exposing (..)

import Navigation exposing (Location)

import Trips.Model exposing (..)
import Trips.Routing exposing (..)
import Trips.View exposing (..)
import Trips.Messages exposing (..)
import Trips.Ports exposing (..)

init : Location -> ( Model, Cmd Msg )
init location =
  let
    currentRoute =
      parseLocation location
  in
    ( initModel currentRoute, Cmd.none )


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
      , addTrip tripId )

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