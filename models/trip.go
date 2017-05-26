package models

type Trip struct {
	Id	  string    `json:"id"`
	Name      string    `json:"name"`
	Places	  []Place   `json:"places"`
}

