module Trips.Messages exposing (..)

import Mouse
import Navigation exposing (Location)
import Http
import Trips.Model exposing (Trip, Place)

type Msg =
    NoOp
  | AddTrip
  | RemoveTrip String
  | AddPlace String
  | RemovePlace String
  | OnInsertPlace (Result Http.Error Place)
  | OnFetchAllPlaces (Result Http.Error (List Place))
  | ChangeTripName String
  | ChangePlaceName String
  | ChangePlaceDescription String
  | OnLocationChange Location
  | OnInsertTrip (Result Http.Error Trip)
  | OnFetchAllTrips (Result Http.Error (List Trip))
  | OnRemoveTrip (Result Http.Error String)
  | OnRemovePlace String (Result Http.Error String)

  | MouseMsg Mouse.Position