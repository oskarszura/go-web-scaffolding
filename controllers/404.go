package controllers

import (
	"net/http"
	"github.com/oskarszura/trips/utils"
)

func NotFound(w http.ResponseWriter, r *http.Request) {
	utils.RenderTemplate(w, r, "404")
}
