module Trips.Utilities exposing (..)

import Debug exposing (..)

valueFromMaybe : Maybe a -> a
valueFromMaybe maybeValue =
  case maybeValue of
    Just value -> value
    Nothing -> Debug.crash "Error: valueFromMaybe"
