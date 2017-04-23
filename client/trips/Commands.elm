module Trips.Commands exposing (..)

import Http
import Json.Decode as Decode exposing (field)
import Trips.Model exposing (Trip)
import Trips.Messages exposing (..)

postTripUrl : String
postTripUrl =
    "/api/trips"

fetchAllUrl : String
fetchAllUrl =
    "/api/trips"

deleteTripUrl : String -> String
deleteTripUrl tripId =
    "/api/trips/" ++ tripId

postTrip : Trip -> Cmd Msg
postTrip newTrip =
    let
      payload = Http.stringBody "application/json" ("""{ "name": \""""++newTrip.name++"""\", "id": """++(toString newTrip.id)++"""}""")
    in
      Http.post postTripUrl payload postSuccessDecoder
          |> Http.send OnInsertTrip

fetchAll : Cmd Msg
fetchAll =
    Http.get fetchAllUrl collectionDecoder
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

collectionDecoder : Decode.Decoder (List Trip)
collectionDecoder =
    Decode.list memberDecoder

postSuccessDecoder : Decode.Decoder Trip
postSuccessDecoder =
    Decode.map2 Trip
        (field "name" Decode.string)
        (field "id" Decode.string)

memberDecoder : Decode.Decoder Trip
memberDecoder =
    Decode.map2 Trip
        (field "name" Decode.string)
        (field "id" Decode.string)