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
	w.Header().Set("Content-Type", "application/json; charset=UTF-8")
	var trips []Trip

	session := utils.GetSession()
	c := session.DB("go_db").C("trips")
	err := c.Find(nil).All(&trips)

	if err != nil {
		log.Fatal(err)
	}

	log.Println("Found trips ", trips)

	if trips == nil {
		trips = TripList{}
	}

	output := trips

	json.NewEncoder(w).Encode(output)
}

