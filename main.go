package main

import (
    "net/http"
    "log"
    "fmt"
    router "github.com/oskarszura/gowebrouter"
)

func main() {
    router.Test()
    http.Handle("/", http.FileServer(http.Dir("./public")))
    setupServer("9090")
}

func setupServer(port string) {
    fmt.Println("Setting up server on " + port + " port")

    fmt.Println("Listening...")
    err := http.ListenAndServe(":" + port, nil)

    if err != nil {
        log.Fatal("ListenAndServe: ", err)
    }
}