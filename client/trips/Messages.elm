module Trips.Messages exposing (..)

import Navigation exposing (Location)

type Msg =
    NoOp
  | AddTrip
  | ChangeTripName String
  | OnLocationChange Location