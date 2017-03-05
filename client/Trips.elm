module Main exposing (..)

import Html exposing (Html, div, ul, li, button, text, program)
import Html.Attributes exposing (class)
import Html.Events exposing (onClick)

-- MODEL


type alias Model =
    { trips: List String
    , tripName: String
    }

initModel : Model
initModel =
  { trips = ["Trip1", "Trip2"]
  , tripName = ""
  }

init : ( Model, Cmd Msg )
init =
    ( initModel, Cmd.none )



-- MESSAGES


type Msg
    = NoOp | AddTrip


-- VIEW


view : Model -> Html Msg
view model =
    div [ class "trips"]
        [
          model.trips
             |> List.map (\l -> li [] [ text l ])
             |> ul []
        , button [ onClick AddTrip ]
                 [ text "Add trip" ]
        ]



-- UPDATE


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        AddTrip ->
            ( { model
                  |   trips = List.append model.trips ["Trip"]
            }
            , Cmd.none )
        NoOp ->
            ( model, Cmd.none )



-- SUBSCRIPTIONS


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.none



-- MAIN


main : Program Never Model Msg
main =
    program
        { init = init
        , view = view
        , update = update
        , subscriptions = subscriptions
        }