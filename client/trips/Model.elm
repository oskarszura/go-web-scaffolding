module Trips.Model exposing (..)

type Route
    = TripsRoute
    | TripRoute Int
    | NotFoundRoute

type alias Model =
    { trips: List String
    , tripName: String
    , route: Route
    }

type alias Trip =
    {

    }

initModel : Route -> Model
initModel route =
  { trips = []
  , tripName = ""
  , route = route
  }