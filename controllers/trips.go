package controllers

import (
	"net/http"
	"github.com/oskarszura/trips/utils"
    gwsRouter "github.com/oskarszura/trips/gowebserver/router"
)

func Trips(w http.ResponseWriter, r *http.Request, options gwsRouter.UrlOptions) {
	utils.RenderTemplate(w, r, "trips")
}
