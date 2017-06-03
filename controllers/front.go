package controllers

import (
	"net/http"
	"github.com/oskarszura/trips/utils"
)

func Front(w http.ResponseWriter, r *http.Request, params struct{Params map[string]string}) {
	utils.RenderTemplate(w, r, "index")
}
