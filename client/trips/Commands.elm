module Trips.Commands exposing (..)

import Http
import Json.Decode as Decode exposing (field)
import Trips.Model exposing (Trip, Place)
import Trips.Messages exposing (..)

postTripUrl : String
postTripUrl =
  "/api/trips"

fetchTripsUrl : String
fetchTripsUrl =
  "/api/trips"

updateTripUrl : String -> String
updateTripUrl tripId =
  "/api/trips/" ++ tripId

deleteTripUrl : String -> String
deleteTripUrl tripId =
  "/api/trips/" ++ tripId

postTrip : Trip -> Cmd Msg
postTrip newTrip =
  let
    payload =
      Http.stringBody "application/json" ("""{ "name": \"""" ++ newTrip.name ++ """\"}""")
  in
    Http.post postTripUrl payload postSuccessDecoder
      |> Http.send OnInsertTrip

updateTrip : Trip -> Cmd Msg
updateTrip updatedTrip =
  let
    places =
        List.map (\place -> """{"id": \"""" ++ place.id ++ """\",
                                "tripId": \"""" ++ place.tripId ++ """\",
                                "name": \"""" ++ place.name ++ """\",
                                "description": \"""" ++ place.description ++ """\",
                                "order": """ ++ (toString place.order) ++ """ }""")
                updatedTrip.places
    payload =
      Http.stringBody "application/json" ("""{ "id": \"""" ++ updatedTrip.id ++ """\",
                                               "name": \"""" ++ updatedTrip.name ++ """\",
                                               "places": [""" ++ (String.join "," places) ++ """]}""")
  in
      Http.request
        { method = "PATCH"
        , headers = []
        , url = updateTripUrl updatedTrip.id
        , body = payload
        , expect = Http.expectJson updateSuccessDecoder
        , timeout = Nothing
        , withCredentials = False
        }
      |> Http.send OnUpdateTrip

postPlaceUrl : String
postPlaceUrl =
  "/api/places"

fetchPlacesUrl : String -> String
fetchPlacesUrl tripId =
  "/api/places" ++ tripId

deletePlaceUrl : String -> String
deletePlaceUrl placeId =
  "/api/places/" ++ placeId

postPlace : Place -> Cmd Msg
postPlace newPlace =
  let
    payload =
      Http.stringBody "application/json" ("""{ "name": \"""" ++ newPlace.name ++ """\",
                                               "description": \"""" ++ newPlace.description ++ """\",
                                               "order": """ ++ (toString newPlace.order) ++ """,
                                               "tripId": """ ++ (toString newPlace.tripId) ++ """}""")
  in
    Http.post postPlaceUrl payload postSuccessPlaceDecoder
      |> Http.send OnInsertPlace

fetchPlaces : String -> Cmd Msg
fetchPlaces tripId =
  Http.get (fetchPlacesUrl tripId) collectionPlaceDecoder
    |> Http.send OnFetchAllPlaces


deletePlace : String -> Cmd Msg
deletePlace placeId =
  Http.request
    { method = "DELETE"
    , headers = []
    , url = deletePlaceUrl placeId
    , body = Http.emptyBody
    , expect = Http.expectString
    , timeout = Nothing
    , withCredentials = False
    }
    |> Http.send (OnRemovePlace placeId)

fetchTrips : Cmd Msg
fetchTrips =
  Http.get fetchTripsUrl collectionTripDecoder
    |> Http.send OnFetchAllTrips

deleteTrip : String -> Cmd Msg
deleteTrip tripId =
  Http.request
    { method = "DELETE"
    , headers = []
    , url = deleteTripUrl tripId
    , body = Http.emptyBody
    , expect = Http.expectString
    , timeout = Nothing
    , withCredentials = False
    }
    |> Http.send OnRemoveTrip

collectionTripDecoder : Decode.Decoder (List Trip)
collectionTripDecoder =
  Decode.list memberDecoder

postSuccessDecoder : Decode.Decoder Trip
postSuccessDecoder =
  Decode.map3 Trip
    (field "id" Decode.string)
    (field "name" Decode.string)
    (field "places" (Decode.list memberPlaceDecoder))

updateSuccessDecoder : Decode.Decoder Trip
updateSuccessDecoder =
  Decode.map3 Trip
    (field "id" Decode.string)
    (field "name" Decode.string)
    (field "places" (Decode.list memberPlaceDecoder))

memberDecoder : Decode.Decoder Trip
memberDecoder =
  Decode.map3 Trip
    (field "id" Decode.string)
    (field "name" Decode.string)
    (field "places" (Decode.list memberPlaceDecoder))

collectionPlaceDecoder : Decode.Decoder (List Place)
collectionPlaceDecoder =
  Decode.list memberPlaceDecoder

postSuccessPlaceDecoder : Decode.Decoder Place
postSuccessPlaceDecoder =
  Decode.map5 Place
    (field "id" Decode.string)
    (field "tripId" Decode.string)
    (field "name" Decode.string)
    (field "description" Decode.string)
    (field "order" Decode.int)

memberPlaceDecoder : Decode.Decoder Place
memberPlaceDecoder =
  Decode.map5 Place
    (field "id" Decode.string)
    (field "tripId" Decode.string)
    (field "name" Decode.string)
    (field "description" Decode.string)
    (field "order" Decode.int)