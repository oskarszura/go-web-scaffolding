package controllers

import (
    "net/http"
    "github.com/oskarszura/trips/utils"
    gwsRouter "github.com/oskarszura/gowebserver/router"
)

func TravelMap(w http.ResponseWriter, r *http.Request, options gwsRouter.UrlOptions) {
    utils.RenderTemplate(w, r, "travel-map")
}
