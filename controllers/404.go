package controllers

import (
	"net/http"
	"github.com/oskarszura/gowebscaffolding/utils"
)

func NotFound(w http.ResponseWriter, r *http.Request) {
	utils.RenderTemplate(w, r, "404")
}
