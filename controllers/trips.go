package controllers

import (
	"net/http"
	"github.com/oskarszura/gowebscaffolding/utils"
)

func ControllerTrips(w http.ResponseWriter, r *http.Request) {
	utils.RenderTemplate(w, r, "trips")
}
