module Trips.Main exposing (..)

import Navigation exposing (Location)

import Trips.Model exposing (..)
import Trips.Routing exposing (..)
import Trips.View exposing (..)
import Trips.Messages exposing (..)

init : Location -> ( Model, Cmd Msg )
init location =
    let
        currentRoute =
            Trips.Routing.parseLocation location
    in
    ( Trips.Model.initModel currentRoute, Cmd.none )


-- UPDATE


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        OnLocationChange location ->
            let
                newRoute =
                    parseLocation location
            in
                ( { model | route = newRoute }, Cmd.none )
        ChangeTripName newName ->
            ( { model
                  |   tripName = newName
            }
            , Cmd.none )
        AddTrip ->
            let tripId =
                    toString (List.length model.trips + 1)
            in
            ( { model
                  |   trips = List.append model.trips [{ name = model.tripName
                                                       , id = tripId
                                                        }]
                  ,   tripName = ""
            }
            , Cmd.none )
        NoOp ->
            ( model, Cmd.none )



-- SUBSCRIPTIONS


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.none



-- MAIN


main : Program Never Model Msg
main =
    Navigation.program OnLocationChange
        { init = init
        , view = view
        , update = update
        , subscriptions = subscriptions
        }