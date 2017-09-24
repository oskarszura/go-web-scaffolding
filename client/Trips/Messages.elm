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
  | UpdateTrip Trip
  | RemoveTrip String
  | OnInsertTrip (Result Http.Error Trip)
  | OnFetchAllTrips (Result Http.Error (List Trip))
  | OnUpdateTrip (Result Http.Error Trip)
  | OnRemoveTrip String (Result Http.Error String)
  | EditTripName Trip
  | UpdateTripName Trip

  | EditPlaceDescription String
  | EditPlaceName String
  | ChangePlaceName String
  | ChangePlaceDescription String
  | AddPlace String
  | EditPlace Place
  | UpdatePlace Place
  | RemovePlace String
  | OnInsertPlace (Result Http.Error Place)
  | OnFetchAllPlaces (Result Http.Error (List Place))
  | OnUpdatePlace (Result Http.Error Place)
  | OnRemovePlace String (Result Http.Error String)
  | PlaceDrop String
  | PlaceDragThrough String
  | PlaceDragEnd Mouse.Position
  | PlaceDragStart String
