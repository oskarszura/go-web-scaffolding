package api

import (
	"log"
	"net/http"
	"encoding/json"
	"gopkg.in/mgo.v2/bson"
	"github.com/oskarszura/trips/utils"
	. "github.com/oskarszura/trips/models"
    "github.com/oskarszura/gowebserver/router"
    "github.com/oskarszura/gowebserver/session"
)


func CtrPlace(w http.ResponseWriter, r *http.Request, opt router.UrlOptions, sm session.ISessionManager) {
	w.Header().Set("Content-Type", "application/json; charset=UTF-8")
	ds := utils.GetDataSource()
	c := ds.C("places")

	switch r.Method {
	case "DELETE":
		placeId := opt.Params["id"]
		err := c.Remove(bson.M{"_id": bson.ObjectIdHex(placeId)})

		if err != nil {
			log.Fatalln(err)
		}

		output := &HalResponse{
			Status: 200,
		}

		json.NewEncoder(w).Encode(output)

	case "PATCH":
		var updatedPlace Place

		placeId := bson.ObjectIdHex(opt.Params["id"])

		decoder := json.NewDecoder(r.Body)
		err := decoder.Decode(&updatedPlace)

		if err != nil {
			log.Fatalln(err)
		}

		err = c.UpdateId(placeId, &Place{
			TripId: bson.ObjectId(updatedPlace.TripId),
			Name: updatedPlace.Name,
			Description: updatedPlace.Description,
			Order: updatedPlace.Order,
		})

		if err != nil {
			log.Fatalln(err)
		}

		output := updatedPlace

		json.NewEncoder(w).Encode(output)

	default:
	}
}

