module Trips.Subscriptions exposing (..)

import Mouse exposing (..)
import Trips.Model exposing (..)
import Trips.Messages exposing (..)

subscriptions : Model -> Sub Msg
subscriptions model =
  Sub.batch
    [ Mouse.clicks MouseMsg
    , Mouse.moves MouseMsg
    , Mouse.ups PlaceDragEnd
    ]
