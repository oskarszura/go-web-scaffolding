module Trips.Pages.Trip exposing (..)

import Html exposing (Html, div, h1, text)
import Html.Attributes exposing (class)
import Array exposing (get, fromList)
import Trips.Messages exposing (..)
import Trips.Model exposing (..)

tripPage : Model -> Int -> Html Msg
tripPage model tripId =
        let
            trip = get (tripId - 1) (fromList model.trips)
        in
            case trip of
              Just trp ->
                  div []
                      [ h1 [] [ text trp.name ]
                      ]
              Nothing ->
                  div []
                      [ text "No trip found" ]