package main
import (
    "log"
    "fmt"
    "net/http"
)

func hello(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintln(w, "Hello World")
}
func main() {

    http.HandleFunc("/", hello)
    log.Printf("Listening on %s...\n", 9090)
    if err := http.ListenAndServe(9090, nil); err != nil {
        panic(err)
    }
}
