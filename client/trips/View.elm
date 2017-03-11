module Trips.View exposing (..)

import Html exposing (Html, div, ul, li, a, button, input, text, program)
import Html.Attributes exposing (class, value, href)
import Html.Events exposing (onClick, onInput)

import Trips.Messages exposing (..)
import Trips.Model exposing (..)

view : Model -> Html Msg
view model =
    div []
        [ page model ]

page : Model -> Html Msg
page model =
    case model.route of
        TripsRoute ->
            tripsPage model

        TripRoute id ->
            tripPage model id

        NotFoundRoute ->
            notFoundView

tripsPage : Model -> Html Msg
tripsPage model =
    div [ class "trips"]
        [
          model.trips
             |> List.map (\l -> li []
                                   [ a [ href ("#/trips/" ++ l.id) ] [ text l.name ] ])
             |> ul []
        , input [ onInput ChangeTripName
                , value model.tripName ]
                []
        , button [ onClick AddTrip ]
                 [ text "Add trip" ]
        , div []
              [ text "Trips" ]
        ]

tripPage : Model -> Int -> Html Msg
tripPage model tripId =
        div []
            [ text (toString tripId)
            ]

notFoundView : Html msg
notFoundView =
    div []
        [ text "Not found"
        ]
