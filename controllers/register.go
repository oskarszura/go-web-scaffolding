package controllers

import (
	"net/http"
	"log"
	"github.com/oskarszura/gowebscaffolding/utils"
	"github.com/oskarszura/gowebscaffolding/gowebserver/models"
)

func Register(w http.ResponseWriter, r *http.Request) {
	switch r.Method {
	case "GET":
		utils.RenderTemplate(w, r, "register")
	case "POST":
		ds := utils.GetDataSource()
		c := ds.C("users")

		err := c.Insert(&models.User{
			Username: r.PostFormValue("username"),
			Password: r.PostFormValue("password"),
		})
		if err != nil {
			log.Fatal(err)
		}

		http.Redirect(w, r, "/", http.StatusSeeOther)
	default:
	}
}
