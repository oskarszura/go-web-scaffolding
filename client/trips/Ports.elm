port module Trips.Ports exposing (..)

import Navigation exposing (Location)


port addTrip : String -> Cmd msg

port openTrip : Location -> Cmd msg