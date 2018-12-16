module Trips.Pages.Trips exposing (..)

import Html exposing (Html, div, ul, li, a, button, input, text)
import Html.Attributes exposing (class, value, href, placeholder)
import Html.Events exposing (onClick, onInput)
import Input.Input exposing (cInput)
import Trips.Messages exposing (..)
import Trips.Model exposing (..)

tripItem : Trip -> Html Msg
tripItem trip =
  let
    tripUrl =
      "#/trips/" ++ trip.id
  in
    li
      [ class "trips__list-item" ]
      [ a
          [ class "trips__list-item-name"
          , href tripUrl ]
          [ text trip.name ]
      , a
          [ class "trips__list-item-delete"
          , onClick (RemoveTrip trip.id) ]
          [ text "Delete" ]
      ]

tripList : Model -> Html Msg
tripList model =
  model.trips
    |> List.map (\trip -> tripItem trip)
    |> ul
        [ class "trips__list" ]

tripAdder: Model -> Html Msg
tripAdder model =
  div
    [ class "trip-adder" ]
    [ cInput "trip-adder__editor" "" ChangeTripName model.tripName "Trip name"
    , cInput "trip-adder__code" "" ChangeTripCode model.tripCode "Code of the country"
    , div
        [ class "trip-adder__actions" ]
        [ button
            [ class "trip-adder__add"
            , onClick AddTrip ]
            [ text "Add trip" ]
        ]
    ]

tripsPage : Model -> Html Msg
tripsPage model =
  div
    [ class "trips"]
    [ tripList model
    , tripAdder model
    ]
