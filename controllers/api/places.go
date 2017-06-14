package api

import (
	"log"
	"net/http"
	"encoding/json"
	"gopkg.in/mgo.v2/bson"
	"github.com/oskarszura/trips/utils"
	. "github.com/oskarszura/trips/models"
)


type PlaceList []Place

func Places(w http.ResponseWriter, r *http.Request, options struct{Params map[string]string}) {
	var places []Place

	w.Header().Set("Content-Type", "application/json; charset=UTF-8")
	ds := utils.GetDataSource()
	c := ds.C("places")

	switch r.Method {
	case "GET":
		err := c.Find(nil).All(&places)

		if err != nil {
			log.Fatalln(err)
		}

		if places == nil {
			places = PlaceList{}
		}

		output := places

		json.NewEncoder(w).Encode(output)
	case "POST":
		var newPlace Place

		decoder := json.NewDecoder(r.Body)
		err := decoder.Decode(&newPlace)

		if err != nil {
			panic(err)
		}

		newPlace = Place{
			Id: bson.NewObjectId(),
			Name: newPlace.Name,
			TripId: newPlace.TripId,
			Description: newPlace.Description,
			Order: newPlace.Order,
		}

		err = c.Insert(newPlace)

		if err != nil {
			log.Fatal(err)
		}

		output := newPlace

		json.NewEncoder(w).Encode(output)
	case "DELETE":
		placeId := options.Params["id"]
		err := c.Remove(bson.M{"_id": bson.ObjectIdHex(placeId)})

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

