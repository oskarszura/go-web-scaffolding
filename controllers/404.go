package controllers

import (
	"net/http"
	"github.com/oskarszura/gowebscaffolding/utils"
)

func Controller404(w http.ResponseWriter, r *http.Request) {
	utils.RenderTemplate(w, r, "404")
}
