module Trips.Pages.Trip exposing (..)

import Html exposing (Html, div, h1, text, input, button, ul, li, textarea, label, header)
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
          [ header
            [ class "trip__heading" ]
            [ if model.editedTrip.id == trp.id then
                input
                    [ class "trip__title-editor"
                    , onInput ChangeTripName
                    , value model.tripName ]
                    [ ]
              else
                h1
                    [ class "trip__title" ]
                    [ text trp.name ]
            , div
                [ class "trip__title-toolbox" ]
                [ if model.editedTrip.id == trp.id then
                    div
                        [ classList
                            [ ("trip__title-save", True)
                            ]
                        , onClick (UpdateTripName trp) ]
                        [ text "Save" ]
                  else
                    div
                        [ classList
                            [ ("trip__title-edit", True)
                            ]
                        , onClick (EditTripName trp) ]
                        [ text "Edit" ]
                ]
            ]
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
                            [ button
                                [ class "trip__place-drag"
                                , onMouseDown (PlaceDragStart place.id) ]
                                []
                            , if model.editedPlace.id == place.id then
                                input
                                    [ class "trip__place-name-editor"
                                    , onInput EditPlaceName
                                    , value model.editedPlace.name ]
                                    []
                              else
                                text place.name
                            , if model.editedPlace.id == place.id then
                                button
                                    [ class "trip__place-save"
                                    , onClick (UpdatePlace place) ]
                                    [ text "Save" ]
                              else
                                button
                                    [ class "trip__place-edit"
                                    , onClick (EditPlace place) ]
                                    [ text "Edit" ]
                            , button
                                [ class "trip__place-remove"
                                , onClick (RemovePlace place.id) ]
                                [ text "Remove" ]
                            ]
                        , if model.editedPlace.id == place.id then
                            textarea
                                [ class "trip__place-description-editor"
                                , onInput EditPlaceDescription
                                , value model.editedPlace.description ]
                                []
                          else
                            div
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