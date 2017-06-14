module Trips.Model exposing (..)

type Route =
    TripsRoute
  | TripRoute String
  | NotFoundRoute

type alias Model =
  { trips: List Trip
  , tripName: String
  , places:  List Place
  , placeName: String
  , placeDescription: String
  , route: Route
  , drag: String
  , mousex: Int
  , mousey: Int
  }

type alias Place =
  { id: String
  , tripId: String
  , name: String
  , description: String
  , order: Int
  }

type alias Trip =
  { id: String
  , name: String
  , places: List Place
  }

initModel : Route -> Model
initModel route =
  { trips = []
  , tripName = ""
  , places = []
  , placeName = ""
  , placeDescription = ""
  , route = route
  , drag = ""
  , mousex = 0
  , mousey = 0
  }