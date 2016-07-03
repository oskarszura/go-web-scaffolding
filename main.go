package main

import (
    goWebServer "github.com/oskarszura/gowebserver"
    "os"
    "log"
    "fmt"
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

    server.RunServer(addr)
}