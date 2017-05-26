package api

import (
	"log"
	"os"
	"net/http"
	"encoding/json"
	"github.com/oskarszura/gowebscaffolding/utils"
	. "github.com/oskarszura/gowebscaffolding/models"
)


type PlaceList []Place

func Places(w http.ResponseWriter, r *http.Request) {
	var places []Place

	dbName := os.Getenv("DB_NAME")
	w.Header().Set("Content-Type", "application/json; charset=UTF-8")
	session := utils.GetSession()
	c := session.DB(dbName).C("places")

	switch r.Method {
	case "GET":
		err := c.Find(nil).All(&places)

		if err != nil {
			log.Fatal(err)
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

		err = c.Insert(&Place{
			Name: newPlace.Name,
			Id: newPlace.Id,
			TripId: newPlace.TripId,
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

