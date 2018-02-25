package controllers

import (
	"net/http"
	"github.com/oskarszura/trips/utils"
    "github.com/oskarszura/gowebserver/router"
    "github.com/oskarszura/gowebserver/session"
)

func NotFound(w http.ResponseWriter, r *http.Request, o router.UrlOptions, sm session.ISessionManager) {
	utils.RenderTemplate(w, r, "404", sm)
}
