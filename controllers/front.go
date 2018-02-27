package controllers

import (
	"net/http"
	"github.com/oskarszura/trips/utils"
    "github.com/oskarszura/gowebserver/router"
    "github.com/oskarszura/gowebserver/session"
)

func Front(w http.ResponseWriter, r *http.Request, opt router.UrlOptions, sm session.ISessionManager) {
	utils.RenderTemplate(w, r, "index", sm)
}
