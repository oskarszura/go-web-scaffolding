package utils

import (
    "os"
    "log"
    "net/http"
    "path/filepath"
    "html/template"
    . "github.com/oskarszura/trips/models"
    gwsSession "github.com/oskarszura/gowebserver/session"
)

func RenderTemplate(w http.ResponseWriter, r *http.Request, name string) {
    isLogged := gwsSession.IsLogged(r)

    if !isLogged && r.URL.Path != "/login" {
        http.Redirect(w, r, "/login", http.StatusSeeOther)
    }

	dir, err := filepath.Abs(filepath.Dir(os.Args[0]))

	if err != nil {
		log.Fatal(err)
	}

	template := template.Must(template.ParseFiles(dir + "/views/" + name + ".html",
		dir + "/views/navigation.html", dir + "/views/view.html"))
	templateModel := Page{VERSION,name, isLogged}
	template.ExecuteTemplate(w, "base", templateModel)
}
