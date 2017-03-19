package main

import (
    "os"
    "log"
    "fmt"
    goWebServer "github.com/oskarszura/gowebscaffolding/gowebserver"
    "github.com/oskarszura/gowebscaffolding/controllers"
    "gopkg.in/mgo.v2"
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

    server.Router.AddRoute(`^\/login/register$`, controllers.ControllerRegister(session))
    server.Router.AddRoute(`^\/login/logout$`, controllers.ControllerAuthenticateLogout)
    server.Router.AddRoute(`^\/login`, controllers.ControllerAuthenticate(session))

    server.Router.AddRoute(`^\/trips`, controllers.ControllerTrips)

    server.Router.AddRoute(`^\/$`, controllers.ControllerFront)
    server.Router.AddRoute(`^\/api`, controllers.ControllerApi)
    server.Router.AddRoute(`\d`, controllers.ControllerDigits)
    server.Router.AddPageNotFoundRoute(controllers.Controller404)
    server.RunServer(addr)
}