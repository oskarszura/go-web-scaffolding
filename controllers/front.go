package controllers

import (
	"net/http"
	"github.com/oskarszura/trips/utils"
)

func Front(w http.ResponseWriter, r *http.Request) {
	utils.RenderTemplate(w, r, "index")
}
