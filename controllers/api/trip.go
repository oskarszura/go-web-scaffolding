package api

import (
	"log"
	"net/http"
	"encoding/json"
	"gopkg.in/mgo.v2/bson"
	"github.com/oskarszura/trips/utils"
    . "github.com/oskarszura/trips/models"
    "github.com/oskarszura/gowebserver/session"
    "github.com/oskarszura/gowebserver/router"
)

func CtrTrip(w http.ResponseWriter, r *http.Request, opt router.UrlOptions, sm session.ISessionManager) {
	var trip Trip

	w.Header().Set("Content-Type", "application/json; charset=UTF-8")
	ds := utils.GetDataSource()
	c := ds.C("trips")
	cp := ds.C("places")

	switch r.Method {
	case "GET":
		tripId := opt.Params["id"]

        cookie, _ := r.Cookie("sid")
        session := sm.Create(cookie.Value)
        user := session.Get("user").(User)

		pipe := c.Pipe([]bson.M{
			{"$match": bson.M{
				"_id": bson.ObjectIdHex(tripId),
				"userid": user.Id,
			}},
			{"$lookup": bson.M{
				"from":"places",
				"localField": "_id",
				"foreignField": "tripid",
				"as": "places",
			}}})


		trip = Trip{}
		err := pipe.One(&trip)

		if err != nil {
			log.Fatalln(err)
		}

		output := trip

		json.NewEncoder(w).Encode(output)
	case "PATCH":
		var updatedTrip Trip

		tripId := opt.Params["id"]

        cookie, _ := r.Cookie("sid")
        session := sm.Create(cookie.Value)
        user := session.Get("user").(User)

		decoder := json.NewDecoder(r.Body)
		err := decoder.Decode(&updatedTrip)

		if err != nil {
			log.Fatalln(err)
		}

		for _, place := range updatedTrip.Places {
			updatedPlace := Place{
				TripId: bson.ObjectId(place.TripId),
				Name: place.Name,
				Description: place.Description,
				Order: place.Order,
			}

			err = cp.UpdateId(place.Id, updatedPlace)

			if err != nil {
				log.Fatalln(err)
			}
		}

		err = c.UpdateId(bson.ObjectIdHex(tripId), Trip{
			Name: updatedTrip.Name,
            Code: updatedTrip.Code,
			UserId: user.Id,
		})

		if err != nil {
			log.Fatalln(err)
		}

		output := updatedTrip

		json.NewEncoder(w).Encode(output)
	case "DELETE":
		tripId := opt.Params["id"]
		err := c.Remove(bson.M{"_id": bson.ObjectIdHex(tripId)})

		if err != nil {
			log.Fatalln(err)
		}

		output := &HalResponse{
			Status: 200,
		}

		json.NewEncoder(w).Encode(output)
	default:
	}
}

