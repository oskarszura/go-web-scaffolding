port module Trips.Ports exposing (..)

import Navigation exposing (Location)
import Trips.Model exposing (Trip, Place)

port addTrip : Trip -> Cmd msg
port addPlace: Place -> Cmd msg
port openTrip : Location -> Cmd msg
port loadingTrip : Int -> Cmd msg