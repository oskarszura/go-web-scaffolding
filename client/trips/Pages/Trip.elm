module Trips.Pages.Trip exposing (..)

import Html exposing (Html, div, h1, text, input, button, ul, li, textarea, label, header)
import Html.Attributes exposing (classList, class, value, style)
import Html.Events exposing (onClick, onInput, onMouseDown, onMouseUp, on)

import Trips.Messages exposing (..)
import Trips.Model exposing (..)

placeItem : Model -> Place -> String -> Html Msg
placeItem model place tripId =
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
        , div
            [ class "trip__place-toolbox" ]
            [ if model.editedPlace.id == place.id then
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

tripPlan : Model -> String -> Html Msg
tripPlan model tripId =
  div
    [ class "trip__plan" ]
    [ div
        [ class "trip__places"]
        [ model.places
          |> List.sortBy .order
          |> List.map (\place -> placeItem model place tripId)
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

tripHeader : Model -> Trip -> Html Msg
tripHeader model trip =
  header
    [ class "trip__heading" ]
    [ if model.editedTrip.id == trip.id then
        input
          [ class "trip__title-editor"
          , onInput ChangeTripName
          , value model.tripName ]
          [ ]
    else
      h1
        [ class "trip__title" ]
        [ text trip.name ]
  , div
      [ class "trip__title-toolbox" ]
      [ if model.editedTrip.id == trip.id then
          div
            [ class "trip__title-save"
            , onClick (UpdateTripName trip) ]
            [ text "Save" ]
        else
          div
            [ class "trip__title-edit"
            , onClick (EditTripName trip) ]
            [ text "Edit" ]
      ]
  ]


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
          [ tripHeader model trp
          , tripPlan model tripId
          ]

      Nothing ->
        div
          []
          [ text "No trip found" ]
