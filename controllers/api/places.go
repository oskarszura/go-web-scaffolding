package api

import (
	"log"
	"net/http"
	"encoding/json"
	"gopkg.in/mgo.v2/bson"
	"github.com/oskarszura/trips/utils"
	. "github.com/oskarszura/trips/models"
    gwsRouter "github.com/oskarszura/gowebserver/router"
    . "github.com/oskarszura/gowebserver/session"
)


type PlaceList []Place

func CtrPlaces(w http.ResponseWriter, r *http.Request, options gwsRouter.UrlOptions, sm ISessionManager) {
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
			log.Fatalln(err)
		}

		newPlace = Place{
			Id: bson.NewObjectId(),
			TripId: bson.ObjectId(newPlace.TripId),
			Name: newPlace.Name,
			Description: newPlace.Description,
			Order: newPlace.Order,
		}

		err = c.Insert(newPlace)

		if err != nil {
			log.Fatalln(err)
		}

		output := newPlace

		json.NewEncoder(w).Encode(output)
	default:
	}
}

