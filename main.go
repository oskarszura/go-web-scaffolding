package main

import (
    "os"
    "log"
    "fmt"
    goWebServer "github.com/oskarszura/gowebscaffolding/gowebserver"
    "github.com/oskarszura/gowebscaffolding/controllers"
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

    server.Router.AddRoute(`^\/authenticate$`, controllers.ControllerAuthenticate)
    server.Router.AddRoute(`^\/authenticate/logout$`, controllers.ControllerAuthenticateLogout)

    server.Router.AddRoute(`^\/$`, controllers.ControllerFront)
    server.Router.AddRoute(`^\/api`, controllers.ControllerApi)
    server.Router.AddRoute(`\d`, controllers.ControllerDigits)
    server.Router.AddPageNotFoundRoute(controllers.Controller404)
    server.RunServer(addr)
}