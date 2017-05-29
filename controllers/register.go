package controllers

import (
	"net/http"
	"log"
	"github.com/oskarszura/trips/utils"
	"github.com/oskarszura/trips/models"
	"gopkg.in/mgo.v2/bson"
)

var newUser *models.User

func Register(w http.ResponseWriter, r *http.Request) {
	switch r.Method {
	case "GET":
		utils.RenderTemplate(w, r, "register")
	case "POST":
		ds := utils.GetDataSource()
		c := ds.C("users")

		newUser = &models.User{
			Id: bson.NewObjectId(),
			Username: r.PostFormValue("username"),
			Password: r.PostFormValue("password"),
		}

		err := c.Insert(newUser)
		if err != nil {
			log.Fatal(err)
		}

		log.Println("Registered user", newUser)

		http.Redirect(w, r, "/", http.StatusSeeOther)
	default:
	}
}
