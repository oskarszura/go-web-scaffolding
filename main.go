package main

import (
    "os"
    "log"
    "fmt"
    "gopkg.in/mgo.v2"
    goWebServer "github.com/oskarszura/gowebscaffolding/gowebserver"
    "github.com/oskarszura/gowebscaffolding/controllers"
    "github.com/oskarszura/gowebscaffolding/controllers/api"
    "github.com/oskarszura/gowebscaffolding/utils"
)

func determineListenAddress() (string, error) {
    port := os.Getenv("PORT")

    if port == "" {
        return "", fmt.Errorf("$PORT not set")
    }
    return ":" + port, nil
}

var server goWebServer.WebServer

func main() {
    mongoUri := os.Getenv("MONGOLAB_URI")
    addr, err := determineListenAddress()

    log.Println("Connecting to mgo with mongoUri = " + mongoUri)

    if err != nil {
        panic(err)
    }

    session, err := mgo.Dial(mongoUri)
    if err != nil {
        panic(err)
    }
    defer session.Close()

    session.SetMode(mgo.Monotonic, true)

    utils.SetSession(session)

    server.Router.AddRoute("/login/register", controllers.Register)
    server.Router.AddRoute("/login/logout", controllers.AuthenticateLogout)
    server.Router.AddRoute("/login", controllers.Authenticate)
    server.Router.AddRoute("/trips", controllers.Trips)
    server.Router.AddRoute("/", controllers.Front)
    server.Router.AddRoute("/api/trips/{id}", api.Trips)
    server.Router.AddRoute("/api/places", api.Places)
    server.Router.AddRoute("/api", controllers.Api)
    server.Router.AddPageNotFoundRoute(controllers.NotFound)

    server.RunServer(addr)
}