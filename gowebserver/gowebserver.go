package gowebserver

import (
	"net/http"
	"log"
)

type WebServer struct {
	Router		UrlRouter
}

func (s *WebServer) RunServer(port string) {
	staticFileServer := http.FileServer(http.Dir("public"))

	http.Handle("/static/", http.StripPrefix("/static/", staticFileServer))
	http.HandleFunc("/", s.Router.route)

	log.Println("Server listening on port = " + port + " ...")

	err := http.ListenAndServe(port, nil)

	if err != nil {
		log.Fatal("Server failed: ", err)
	}
}