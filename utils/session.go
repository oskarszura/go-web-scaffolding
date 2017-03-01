package utils

import (
	"net/http"
)

func IsLogged(r *http.Request) bool {
	_, err := r.Cookie("sid")
	isLogged := false

	if err != nil {
		isLogged = true
	}

	return isLogged
}

