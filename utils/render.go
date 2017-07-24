package utils

import (
    "os"
    "log"
    "net/http"
    "path/filepath"
    "html/template"
    "github.com/oskarszura/trips/gowebserver/models"
)

func RenderTemplate(w http.ResponseWriter, r *http.Request, name string) {
	dir, err := filepath.Abs(filepath.Dir(os.Args[0]))

	if err != nil {
		log.Fatal(err)
	}

	template := template.Must(template.ParseFiles(dir + "/views/" + name + ".html",
		dir + "/views/navigation.html", dir + "/views/view.html"))
	templateModel := models.Page{VERSION,name, IsLogged(r)}
	template.ExecuteTemplate(w, "base", templateModel)
}
