module Trips.Messages exposing (..)

import Navigation exposing (Location)
import Http
import Trips.Model exposing (Trip)

type Msg =
    NoOp
  | AddTrip
  | RemoveTrip String
  | AddPlace String
  | OnInsertPlace (Result Http.Error Trip)
  | ChangeTripName String
  | ChangePlaceName String
  | OnLocationChange Location
  | OnInsertTrip (Result Http.Error Trip)
  | OnFetchAllTrips (Result Http.Error (List Trip))
  | OnRemoveTrip (Result Http.Error String)