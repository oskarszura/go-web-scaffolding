package controllers

import (
	"net/http"
	"github.com/oskarszura/gowebscaffolding/utils"
)

func ControllerFront(w http.ResponseWriter, r *http.Request) {
	utils.RenderTemplate(w, r, "index")
}
