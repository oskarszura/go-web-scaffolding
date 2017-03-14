module Trips.View exposing (..)

import Html exposing (Html, div, ul, li, a, button, input, text, program)
import Html.Attributes exposing (class, value, href)
import Html.Events exposing (onClick, onInput)
import Trips.Messages exposing (..)
import Trips.Model exposing (..)
import Trips.Pages.Trips exposing (..)
import Trips.Pages.Trip exposing (..)

view : Model -> Html Msg
view model =
  div [] [ page model ]

page : Model -> Html Msg
page model =
  case model.route of
    TripsRoute ->
      tripsPage model

    TripRoute id ->
      tripPage model id

    NotFoundRoute ->
      notFoundView

notFoundView : Html msg
notFoundView =
  div [] [ text "Not found" ]
