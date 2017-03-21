package main

import (
    "os"
    "log"
    "fmt"
    "gopkg.in/mgo.v2"
    goWebServer "github.com/oskarszura/gowebscaffolding/gowebserver"
    "github.com/oskarszura/gowebscaffolding/controllers"
    "github.com/oskarszura/gowebscaffolding/apicontrollers"
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
    addr, err := determineListenAddress()
    if err != nil {
        log.Fatal(err)
    }

    session, err := mgo.Dial("mongodb://localhost/go_db")
    if err != nil {
        panic(err)
    }
    defer session.Close()
    session.SetMode(mgo.Monotonic, true)

    utils.SetSession(session)

    // Login
    server.Router.AddRoute(`^\/login/register$`, controllers.Register)
    server.Router.AddRoute(`^\/login/logout$`, controllers.AuthenticateLogout)
    server.Router.AddRoute(`^\/login`, controllers.Authenticate)

    // Trips
    server.Router.AddRoute(`^\/trips`, controllers.Trips)

    // Front
    server.Router.AddRoute(`^\/$`, controllers.Front)

    // Api
    server.Router.AddRoute(`^\/api/trips`, apicontrollers.Trips)
    server.Router.AddRoute(`^\/api`, controllers.Api)

    // Errors
    server.Router.AddPageNotFoundRoute(controllers.NotFound)

    server.RunServer(addr)
}