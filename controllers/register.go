package controllers

import (
	"net/http"
	"log"
	"gopkg.in/mgo.v2"
	"github.com/oskarszura/gowebscaffolding/utils"
	"github.com/oskarszura/gowebscaffolding/gowebserver/models"
)

func ControllerRegister(session *mgo.Session) func(http.ResponseWriter, *http.Request) {
	return func (w http.ResponseWriter, r *http.Request) {
		switch r.Method {
		case "GET":
			utils.RenderTemplate(w, r, "register")
		case "POST":
			c := session.DB("go_db").C("users")

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
}
