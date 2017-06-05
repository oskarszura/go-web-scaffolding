module Trips.Pages.Trip exposing (..)

import Html exposing (Html, div, h1, text, input, button, ul, li, textarea, label)
import Html.Attributes exposing (classList, class, value)
import Html.Events exposing (onClick, onInput)
import Array exposing (get, fromList)
import Trips.Messages exposing (..)
import Trips.Model exposing (..)

tripPage : Model -> Int -> Html Msg
tripPage model tripId =
  let
    trip =
      get (tripId - 1) (fromList model.trips)
  in
    case trip of
      Just trp ->
        div
          [ class "trip" ]
          [ h1
              []
              [ text trp.name ]
          , div
            [ class "trip__plan" ]
            [ div
                [ class "trip__places"]
                [ model.places
                  |> List.map (\l ->
                      li
                        [ class "trip__place-item" ]
                        [ div
                            [ class "trip__place-name" ]
                            [ text l.name
                            ,  button
                                 [ class "trip__place-remove"
                                 , onClick (RemovePlace l.id) ]
                                 [ text "Remove" ]
                            ]
                        , div
                            [ class "trip__place-description" ]
                            [ text l.description ]
                        ]
                   )
                  |> ul
                      [ class "trip__place-list" ]
                ]
            , label
                []
                [ text "Description" ]
            , textarea
                [ class "trip__place-adder-description"
                , onInput ChangePlaceDescription
                , value model.placeDescription ]
                []
            , label
                []
                [ text "Name" ]
            , div
                [ class "trip__place-adder" ]
                [ input
                    [ class "trip__place-adder-name"
                    , onInput ChangePlaceName
                    , value model.placeName ]
                    []
                , div
                    [ class "trip__place-adder-actions" ]
                    [ button
                        [ class "trip__place-adder-add"
                        , onClick (AddPlace (toString tripId)) ]
                        [ text "Add place" ]
                    ]
                ]
            ]
          ]

      Nothing ->
        div
          []
          [ text "No trip found" ]