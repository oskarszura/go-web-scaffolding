package controllers

import (
	"net/http"
	"time"
	"os"
	"gopkg.in/mgo.v2"
	"gopkg.in/mgo.v2/bson"
	"log"
	"github.com/oskarszura/gowebscaffolding/utils"
	"github.com/oskarszura/gowebscaffolding/gowebserver/models"
)

func Authenticate(w http.ResponseWriter, r *http.Request) {
	defer r.Body.Close()

	switch r.Method {
	case "GET":
		utils.RenderTemplate(w, r, "login")
	case "POST":
		session := utils.GetSession()
		_, err := r.Cookie("sid")

		if(err != nil) {
			user := r.PostFormValue("username")
			password := r.PostFormValue("password")
			expiration := time.Now().Add(365 * 24 * time.Hour)

			if(authenticateUser(session, user, password)) {
				cookie := http.Cookie {
					Name: "sid",
					Value: user + password,
					Expires: expiration }

				http.SetCookie(w, &cookie)
				http.Redirect(w, r, "/", http.StatusSeeOther)
			}
		}

		http.Redirect(w, r, "/login", http.StatusSeeOther)
	case "PUT":
	case "DELETE":
	default:
	}
}

func authenticateUser(session *mgo.Session, user string, password string) bool {
	var foundUser models.User
	dbName := os.Getenv("DB_NAME")
	c := session.DB(dbName).C("users")
	err := c.Find(bson.M{"username": user, "password": password}).One(&foundUser)

	log.Println("Logged in as ", user, password)

	if err != nil {
		log.Println("User not found err=", err)
		return false
	}

	return true
}