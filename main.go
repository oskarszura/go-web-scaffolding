package main

import (
    "net/http"
    "log"
)

func main() {
    http.Handle("/", http.FileServer(http.Dir("./public")))
    err := http.ListenAndServe(":9090", nil)

    if err != nil {
        log.Fatal("ListenAndServe: ", err)
    }
}