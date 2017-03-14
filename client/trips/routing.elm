module Trips.Routing exposing (..)

import Navigation exposing (Location)
import Trips.Model exposing (..)
import UrlParser exposing (..)


matchers : Parser (Route -> a) a
matchers =
  oneOf
    [ map TripsRoute top
    , map TripRoute (s "trips" </> int)
    , map TripsRoute (s "trips")
    ]


parseLocation : Location -> Route
parseLocation location =
  case (parseHash matchers location) of
    Just route ->
      route

    Nothing ->
      NotFoundRoute