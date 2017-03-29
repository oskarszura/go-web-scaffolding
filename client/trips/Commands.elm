module Trips.Commands exposing (..)

import Http
import Json.Decode as Decode exposing (field)
import Trips.Model exposing (Trip)
import Trips.Messages exposing (..)


fetchAll : Cmd Msg
fetchAll =
    Http.get fetchAllUrl collectionDecoder
        |> Http.send OnFetchAllTrips


fetchAllUrl : String
fetchAllUrl =
    "/api/trips"

postTrip : Trip -> Cmd Msg
postTrip newTrip =
    let
      payload = Http.stringBody "application/json" ("""{ "name": \""""++newTrip.name++"""\", "id": """++(toString newTrip.id)++"""}""")
    in
      Http.post postTripUrl payload postSuccessDecoder
          |> Http.send OnInsertTrip

postTripUrl : String
postTripUrl =
    "/api/trips"

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