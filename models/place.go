package models

import "gopkg.in/mgo.v2/bson"

type Place struct {
	Id	 	bson.ObjectId 	`json:"id" bson:"_id,omitempty"`
	Name      	string    	`json:"name"`
	Description     string    	`json:"description"`
	TripId    	string    	`json:"tripId"`
}

