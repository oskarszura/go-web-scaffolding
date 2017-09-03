package main

import (
    "os"
    "log"
    "fmt"
    "gopkg.in/mgo.v2"
    "github.com/oskarszura/trips/controllers"
    "github.com/oskarszura/trips/controllers/api"
    "github.com/oskarszura/trips/utils"
    gws "github.com/oskarszura/trips/gowebserver"
)

func determineListenAddress() (string, error) {
    port := os.Getenv("PORT")

    if port == "" {
        return "", fmt.Errorf("$PORT not set")
    }
    return ":" + port, nil
}

var (
    server gws.WebServer
)

//go:generate bash ./scripts/version.sh ./scripts/version_tpl.txt ./version.go

func main() {
    dbUri := os.Getenv("MONGOLAB_URI")
    addr, err := determineListenAddress()
    if err != nil {
        panic(err)
    }

    utils.VERSION = VERSION
    log.Println("Starting trips version:", utils.VERSION)

    log.Println("Connecting to mgo with URI = " + dbUri)
    dbSession, err := mgo.Dial(dbUri)
    if err != nil {
        panic(err)
    }
    defer dbSession.Close()
    dbSession.SetMode(mgo.Monotonic, true)
    utils.SetSession(dbSession)

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

    serverOptions := gws.WebServerOptions{
        addr,
        "/static/",
        "public",
    }

    server.Run(serverOptions)
}
