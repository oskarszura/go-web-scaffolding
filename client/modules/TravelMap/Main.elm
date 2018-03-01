port module TravelMap.Main exposing (..)

import Html

import TravelMap.Messages exposing (..)
import TravelMap.Model exposing (..)
import TravelMap.View exposing (..)

init : ( Model, Cmd Msg )
init  =
  (Model, Cmd.none)


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
  case msg of
    NoOp ->
      ( model, Cmd.none )


main : Program Never Model Msg
main =
  Html.program
    { init = init
    , view = view
    , update = update
    , subscriptions = (\model-> Sub.none)
    }
