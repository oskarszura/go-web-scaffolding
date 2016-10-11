package controllers

import (
	"net/http"
	"time"
	"io/ioutil"
	"fmt"
)

func ControllerAuthenticate(w http.ResponseWriter, r *http.Request) {
	defer r.Body.Close()

	switch r.Method {
	case "GET":
	case "POST":
		_, err := r.Cookie("sid")

		if(err != nil) {
			expiration := time.Now().Add(365 * 24 * time.Hour)

			cookie := http.Cookie {
				Name: "sid",
				Value: "sid-value",
				Expires: expiration }

			buf, _ := ioutil.ReadAll(r.Body)
			fmt.Println(string(buf))

			http.SetCookie(w, &cookie)
		}

		http.Redirect(w, r, "/", http.StatusSeeOther)
	case "PUT":
	case "DELETE":
	default:
	}

}
