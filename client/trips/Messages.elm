module Trips.Messages exposing (..)

import Mouse
import Navigation exposing (Location)
import Http
import Trips.Model exposing (Trip, Place)

type Msg =
    NoOp
  | OnLocationChange Location
  | MouseMsg Mouse.Position

  | ChangeTripName String
  | AddTrip
  | RemoveTrip String
  | OnInsertTrip (Result Http.Error Trip)
  | OnFetchAllTrips (Result Http.Error (List Trip))
  | OnRemoveTrip (Result Http.Error String)

  | ChangePlaceName String
  | ChangePlaceDescription String
  | AddPlace String
  | RemovePlace String
  | OnInsertPlace (Result Http.Error Place)
  | OnFetchAllPlaces (Result Http.Error (List Place))
  | OnRemovePlace String (Result Http.Error String)
  | PlaceDrop String
  | PlaceDragEnd Mouse.Position
  | PlaceDragStart String