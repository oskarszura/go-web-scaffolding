package controllers

import (
	"net/http"
	"time"
	"github.com/oskarszura/gowebscaffolding/utils"
)

func ControllerAuthenticate(w http.ResponseWriter, r *http.Request) {
	defer r.Body.Close()

	switch r.Method {
	case "GET":
		utils.RenderTemplate(w, r, "login")
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
	return bool(user == "admin@localhost.pl" && password == "admin")
}