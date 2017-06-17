package api

import (
	"log"
	"net/http"
	"encoding/json"
	"gopkg.in/mgo.v2/bson"
	"github.com/oskarszura/trips/utils"
	. "github.com/oskarszura/trips/models"
)

func CtrTrip(w http.ResponseWriter, r *http.Request, options struct{Params map[string]string}) {
	var trip Trip

	w.Header().Set("Content-Type", "application/json; charset=UTF-8")
	ds := utils.GetDataSource()
	c := ds.C("trips")
	cp := ds.C("places")

	switch r.Method {
	case "GET":
		tripId := options.Params["id"]

		pipe := c.Pipe([]bson.M{
			{"$match": bson.M{
				"_id": bson.ObjectIdHex(tripId),
				"userid": utils.GetUser().Id,
			}},
			{"$lookup": bson.M{
				"from":"places",
				"localField": "id",
				"foreignField": "tripid",
				"as": "places",
			}}})


		trip = Trip{}
		err := pipe.One(&trip)

		if err != nil {
			log.Fatal(err)
		}

		output := trip

		json.NewEncoder(w).Encode(output)
	case "PATCH":
		var updatedTrip Trip

		decoder := json.NewDecoder(r.Body)
		err := decoder.Decode(&updatedTrip)

		if err != nil {
			panic(err)
		}

		updatedTrip = Trip{
			Id: updatedTrip.Id,
			UserId: utils.GetUser().Id,
			Name: updatedTrip.Name,
			Places: updatedTrip.Places,
		}

		for _, place := range updatedTrip.Places {
			err = cp.Remove(bson.M{"tripId": updatedTrip.Id})

			if err != nil {
				log.Fatal(err)
			}

			newPlace := Place{
					Id: bson.NewObjectId(),
					TripId: bson.ObjectId(place.TripId),
					Name: place.Name,
					Description: place.Description,
					Order: place.Order,
				}

			err = cp.Insert(newPlace)

			if err != nil {
				log.Fatal(err)
			}
		}

		output := updatedTrip

		json.NewEncoder(w).Encode(output)
	default:
	}
}

