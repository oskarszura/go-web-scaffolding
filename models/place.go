package models

import "gopkg.in/mgo.v2/bson"

type Place struct {
	Id	 	bson.ObjectId 	`json:"id" bson:"_id,omitempty"`
	TripId    	bson.ObjectId	`json:"tripId"`
	Name      	string    	`json:"name"`
	Description     string    	`json:"description"`
	Order    	int	    	`json:"order"`
}

