package controllers

import (
	"net/http"
	"time"
	"gopkg.in/mgo.v2/bson"
	"log"
	"github.com/oskarszura/trips/utils"
	"github.com/oskarszura/trips/models"
)

func Authenticate(w http.ResponseWriter, r *http.Request) {
	defer r.Body.Close()

	switch r.Method {
	case "GET":
		utils.RenderTemplate(w, r, "login")
	case "POST":
		_, err := r.Cookie("sid")

		if err != nil {
			user := r.PostFormValue("username")
			password := r.PostFormValue("password")
			expiration := time.Now().Add(365 * 24 * time.Hour)

			if authenticateUser(user, password) {
				cookie := http.Cookie {
					Name: "sid",
					Value: user + password,
					Expires: expiration }

				http.SetCookie(w, &cookie)
				http.Redirect(w, r, "/", http.StatusSeeOther)
			}
		}

		http.Redirect(w, r, "/login", http.StatusSeeOther)
	default:
	}
}

func authenticateUser(user string, password string) bool {
	var loggedUser models.User

	ds := utils.GetDataSource()
	c := ds.C("users")

	err := c.Find(bson.M{
		"username": user,
		"password": password,
	}).One(&loggedUser)

	if err != nil {
		log.Println("User not found err=", err)
		return false
	}

	log.Println("Logged in as user", loggedUser)
	utils.SetUser(loggedUser)

	return true
}