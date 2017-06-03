package controllers

import (
	"net/http"
	"github.com/oskarszura/trips/utils"
)

func NotFound(w http.ResponseWriter, r *http.Request, params struct{Params map[string]string}) {
	utils.RenderTemplate(w, r, "404")
}
