package api

import (
	"log"
	"net/http"
	"encoding/json"
	"gopkg.in/mgo.v2/bson"
	"github.com/oskarszura/gowebscaffolding/utils"
	. "github.com/oskarszura/gowebscaffolding/models"
)

type TripList []Trip

func Trips(w http.ResponseWriter, r *http.Request) {
	var trips []Trip

	w.Header().Set("Content-Type", "application/json; charset=UTF-8")
	ds := utils.GetDataSource()
	c := ds.C("trips")

	switch r.Method {
	case "GET":
		pipe := c.Pipe([]bson.M{{"$lookup": bson.M{
			"from":"places",
			"localField": "id",
			"foreignField": "tripid",
			"as": "places",
		}}})

		trips = TripList{}
		err := pipe.All(&trips)

		if err != nil {
			log.Fatal(err)
		}

		if trips == nil {
			trips = TripList{}
		}

		output := trips

		json.NewEncoder(w).Encode(output)
	case "POST":
		var newTrip Trip

		decoder := json.NewDecoder(r.Body)
		err := decoder.Decode(&newTrip)

		if err != nil {
			panic(err)
		}

		err = c.Insert(&Trip{
			Name: newTrip.Name,
			Id: newTrip.Id,
		})

		if err != nil {
			log.Fatal(err)
		}

		output := &utils.HalResponse{
			Status: 200,
		}

		json.NewEncoder(w).Encode(output)
	default:
	}
}

