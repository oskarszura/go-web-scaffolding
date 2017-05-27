package models

type Place struct {
	Id	  	string    `json:"id"`
	Name      	string    `json:"name"`
	Description     string    `json:"description"`
	TripId    	string    `json:"tripId"`
}

