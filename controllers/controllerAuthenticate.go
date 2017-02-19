package controllers

import (
	"net/http"
	"time"
	"html/template"
	"github.com/oskarszura/gowebscaffolding/gowebserver/models"
	"path/filepath"
	"os"
	"log"
)

func ControllerAuthenticate(w http.ResponseWriter, r *http.Request) {
	defer r.Body.Close()

	switch r.Method {
	case "GET":
		dir, err := filepath.Abs(filepath.Dir(os.Args[0]))

		if err != nil {
			log.Fatal(err)
		}

		p, _ := models.LoadPage("login")
		t, _ := template.ParseFiles(dir + "/views/view.html")
		t.Execute(w, p)
	case "POST":
		_, err := r.Cookie("sid")

		if(err != nil) {
			user := r.PostFormValue("username")
			password := r.PostFormValue("password")
			expiration := time.Now().Add(365 * 24 * time.Hour)

			if(authenticateUser(user, password)) {
				cookie := http.Cookie {
					Name: "sid",
					Value: user + password,
					Expires: expiration }

				http.SetCookie(w, &cookie)
			}
		}

		http.Redirect(w, r, "/", http.StatusSeeOther)
	case "PUT":
	case "DELETE":
	default:
	}

}

func authenticateUser(user string, password string) bool {
	return bool(user == "admin" && password == "password")
}