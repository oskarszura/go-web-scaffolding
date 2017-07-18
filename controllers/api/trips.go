package api

import (
	"log"
	"net/http"
	"encoding/json"
	"gopkg.in/mgo.v2/bson"
	"github.com/oskarszura/trips/utils"
	. "github.com/oskarszura/trips/models"
)

type TripList []Trip

func CtrTrips(w http.ResponseWriter, r *http.Request, params struct{Params map[string]string}) {
	var trips []Trip

	w.Header().Set("Content-Type", "application/json; charset=UTF-8")
	ds := utils.GetDataSource()
	c := ds.C("trips")

	switch r.Method {
	case "GET":
        cookie, _ := r.Cookie("sid")
        session := utils.CreateSession(cookie.Value)
        userId := (session.Get("user").(User)).Id

		pipe := c.Pipe([]bson.M{
			{"$match": bson.M{"userid": userId}},
			{"$lookup": bson.M{
			"from":"places",
			"localField": "_id",
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

        cookie, _ := r.Cookie("sid")
        session := utils.CreateSession(cookie.Value)
        userId := (session.Get("user").(User)).Id

		decoder := json.NewDecoder(r.Body)
		err := decoder.Decode(&newTrip)

		if err != nil {
			log.Fatalln(err)
		}

		newTrip = Trip{
			Id: bson.NewObjectId(),
			UserId: userId,
			Name: newTrip.Name,
			Places: PlaceList{},
		}

		err = c.Insert(newTrip)

		if err != nil {
			log.Fatalln(err)
		}

		output := newTrip

		json.NewEncoder(w).Encode(output)
	default:
	}
}

