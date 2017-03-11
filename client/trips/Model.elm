module Trips.Model exposing (..)

type Route
    = TripsRoute
    | TripRoute Int
    | NotFoundRoute

type alias Model =
    { trips: List Trip
    , tripName: String
    , route: Route
    }

type alias Trip =
    { name: String
    , id: String
    }

initModel : Route -> Model
initModel route =
  { trips = []
  , tripName = ""
  , route = route
  }