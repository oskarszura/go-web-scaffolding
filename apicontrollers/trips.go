package apicontrollers

import (
	"log"
	"net/http"
	"encoding/json"
	"github.com/oskarszura/gowebscaffolding/utils"
	. "github.com/oskarszura/gowebscaffolding/apicontrollers/models"
)


type TripList []Trip

func Trips(w http.ResponseWriter, r *http.Request) {
	var trips []Trip

	w.Header().Set("Content-Type", "application/json; charset=UTF-8")
	session := utils.GetSession()
	c := session.DB("go_db").C("trips")

	switch r.Method {
	case "GET":
		err := c.Find(nil).All(&trips)

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

