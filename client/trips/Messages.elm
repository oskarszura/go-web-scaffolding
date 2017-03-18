module Trips.Messages exposing (..)

import Navigation exposing (Location)

type Msg =
    NoOp
  | AddTrip
  | AddPlace
  | ChangeTripName String
  | ChangePlaceName String
  | OnLocationChange Location