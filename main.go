package main
import (
    "fmt"
    "net/http"
)

func hello(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintln(w, "Hello World")
}
func main() {
    http.HandleFunc("/", hello)
    if err := http.ListenAndServe(":9090", nil); err != nil {
        panic(err)
    }
}
