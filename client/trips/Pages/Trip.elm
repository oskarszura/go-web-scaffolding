module Trips.Pages.Trip exposing (..)

import Html exposing (Html, div, text)
import Trips.Messages exposing (..)
import Trips.Model exposing (..)

tripPage : Model -> Int -> Html Msg
tripPage model tripId =
        div []
            [ text (toString tripId)
            ]