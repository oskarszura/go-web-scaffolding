package controllers

import (
	"net/http"
	"github.com/oskarszura/trips/utils"
    gwsRouter "github.com/oskarszura/trips/gowebserver/router"
)

func NotFound(w http.ResponseWriter, r *http.Request, options gwsRouter.UrlOptions) {
	utils.RenderTemplate(w, r, "404")
}
