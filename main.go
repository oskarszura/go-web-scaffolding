package main

import (
    "os"
    "log"
    "fmt"
    "gopkg.in/mgo.v2"
    goWebServer "github.com/oskarszura/trips/gowebserver"
    "github.com/oskarszura/trips/controllers"
    "github.com/oskarszura/trips/controllers/api"
    "github.com/oskarszura/trips/utils"
)

func determineListenAddress() (string, error) {
    port := os.Getenv("PORT")

    if port == "" {
        return "", fmt.Errorf("$PORT not set")
    }
    return ":" + port, nil
}

var (
    server goWebServer.WebServer
)

//go:generate bash ./scripts/version.sh ./scripts/version_tpl.txt ./version.go

func main() {
    dbUri := os.Getenv("MONGOLAB_URI")
    addr, err := determineListenAddress()

    utils.VERSION = VERSION
    log.Println("Starting trips version:", utils.VERSION)

    log.Println("Connecting to mgo with URI = " + dbUri)

    if err != nil {
        panic(err)
    }

    session, err := mgo.Dial(dbUri)
    if err != nil {
        panic(err)
    }
    defer session.Close()

    session.SetMode(mgo.Monotonic, true)

    utils.SetSession(session)
    utils.InitializeSessions()



    server.Router.AddRoute("/login/register", controllers.Register)
    server.Router.AddRoute("/login/logout",
        controllers.AuthenticateLogout)
    server.Router.AddRoute("/login", controllers.Authenticate)
    server.Router.AddRoute("/trips", controllers.Trips)
    server.Router.AddRoute("/", controllers.Front)
    server.Router.AddRoute("/api/trips", api.CtrTrips)
    server.Router.AddRoute("/api/trips/{id}", api.CtrTrip)
    server.Router.AddRoute("/api/places", api.CtrPlaces)
    server.Router.AddRoute("/api/places/{id}", api.CtrPlace)
    server.Router.AddNotFoundRoute(controllers.NotFound)

    server.Run(addr)
}
