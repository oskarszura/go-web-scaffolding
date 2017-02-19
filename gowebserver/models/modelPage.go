package models

import (
	"html/template"
	"io/ioutil"
)

type Page struct {
	Title string
	Body  template.HTML
	Navigation template.HTML
}

func LoadPage(title string) (*Page, error) {
	filename := "views/" + title + ".html"
	body, err := ioutil.ReadFile(filename)
	navigation, err := ioutil.ReadFile("views/navigation.html")

	if err != nil {
		return nil, err
	}
	return &Page{
		Title: title,
		Body: template.HTML(body),
		Navigation: template.HTML(navigation)}, nil
}