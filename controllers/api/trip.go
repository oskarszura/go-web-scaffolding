package api

import (
	"log"
	"net/http"
	"encoding/json"
	"gopkg.in/mgo.v2/bson"
	"github.com/oskarszura/trips/utils"
	"github.com/oskarszura/trips/models"
)

func CtrTrip(w http.ResponseWriter, r *http.Request, params struct{Params map[string]string}) {
	var trip models.Trip

	w.Header().Set("Content-Type", "application/json; charset=UTF-8")
	ds := utils.GetDataSource()
	c := ds.C("trips")

	switch r.Method {
	case "GET":
		tripId := params.Params["id"]



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


		trip = models.Trip{}
		err := pipe.One(&trip)

		if err != nil {
			log.Fatal(err)
		}

		output := trip

		json.NewEncoder(w).Encode(output)
	default:
	}
}

