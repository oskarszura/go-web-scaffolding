module Trips.Pages.Trip exposing (..)

import Html exposing (Html, div, h1, text, input, button, ul, li, textarea, label)
import Html.Attributes exposing (classList, class, value, style)
import Html.Events exposing (onClick, onInput, onMouseDown, onMouseUp, on)

import Trips.Messages exposing (..)
import Trips.Model exposing (..)

tripPage : Model -> String -> Html Msg
tripPage model tripId =
  let
      trip =
        model.trips
            |> List.filter (\trip -> trip.id == tripId)
            |> List.head
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
                  |> List.sortBy .order
                  |> List.map (\place ->
                      li
                        [ classList
                            [ ("trip__place-item", True)
                            , ("trip__place-item--dragging", model.drag == place.id)
                            ]
                        , onMouseUp (PlaceDrop tripId place.id)
                        , style
                            [ ("left", toString model.mousex ++ "px")
                            , ("top", toString model.mousey ++ "px")
                            ]
                        ]
                        [ div
                            [ class "trip__place-name" ]
                            [ text place.name
                            ,  button
                                 [ class "trip__place-remove"
                                 , onClick (RemovePlace place.id) ]
                                 [ text "Remove" ]
                            ,  button
                                 [ class "trip__place-drag"
                                 , onMouseDown (PlaceDragStart place.id) ]
                                 [ text "Drag" ]
                            ]
                        , div
                            [ class "trip__place-description" ]
                            [ text place.description ]
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
                        , onClick (AddPlace tripId) ]
                        [ text "Add place" ]
                    ]
                ]
            ]
          ]

      Nothing ->
        div
          []
          [ text "No trip found" ]