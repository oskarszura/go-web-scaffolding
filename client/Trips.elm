module Main exposing (..)

import Html exposing (Html, div, ul, li, button, input, text, program)
import Html.Attributes exposing (class, value)
import Html.Events exposing (onClick, onInput)

-- MODEL


type alias Model =
    { trips: List String
    , tripName: String
    }

initModel : Model
initModel =
  { trips = []
  , tripName = ""
  }

init : ( Model, Cmd Msg )
init =
    ( initModel, Cmd.none )



-- MESSAGES


type Msg
    = NoOp
    | AddTrip
    | ChangeTripName String


-- VIEW


view : Model -> Html Msg
view model =
    div [ class "trips"]
        [
          model.trips
             |> List.map (\l -> li [] [ text l ])
             |> ul []
        , input [ onInput ChangeTripName
                , value model.tripName ]
                []
        , button [ onClick AddTrip ]
                 [ text "Add trip" ]
        ]



-- UPDATE


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        ChangeTripName newName ->
            ( { model
                  |   tripName = newName
            }
            , Cmd.none )
        AddTrip ->
            ( { model
                  |   trips = List.append model.trips [model.tripName]
                  ,   tripName = ""
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