module Trips.Messages exposing (..)

import Navigation exposing (Location)
import Http
import Trips.Model exposing (Trip)

type Msg =
    NoOp
  | AddTrip
  | AddPlace
  | ChangeTripName String
  | ChangePlaceName String
  | OnLocationChange Location
  | OnFetchAllTrips (Result Http.Error (List Trip))