module Trips.Pages.Trip exposing (..)

import Html exposing (Html, div, h1, text, input, button, ul, li)
import Html.Attributes exposing (classList, class, value)
import Html.Events exposing (onClick, onInput)
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
        div [ class "trip" ]
          [ h1 [] [ text trp.name ]
          , div [
              classList [ ("js-map", True)
                , ("trip-map", True)]
            ] []
          , div
              [ class "trip__plan" ]
              [ div [ class "trip__places"]
                  [ model.places
                    |> List.map (\l ->
                        li
                          [ class "trips__place-item" ]
                          [ text l.name ]
                     )
                    |> ul [ class "trips__place-list" ]
                  ]
              , input [ class "trip__location"
                      , onInput ChangePlaceName
                      , value model.placeName
                  ]
                  []
              , button [ class "trip__add-location"
                  , onClick AddPlace
                  ]
                  [ text "Add Location" ]
              ]
          ]
      Nothing ->
        div [] [ text "No trip found" ]