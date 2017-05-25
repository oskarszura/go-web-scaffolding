module Trips.Model exposing (..)

type Route =
    TripsRoute
  | TripRoute Int
  | NotFoundRoute

type alias Model =
  { trips: List Trip
  , tripName: String
  , places:  List Place
  , placeName: String
  , route: Route
  }

type alias Place =
  { name: String
  , id: String
  , tripId: String
  }

type alias Trip =
  { name: String
  , id: String
  , places: List Place
  }

initModel : Route -> Model
initModel route =
  { trips = []
  , tripName = ""
  , places = []
  , placeName = ""
  , route = route
  }