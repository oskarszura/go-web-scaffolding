package models

import "gopkg.in/mgo.v2/bson"

type Trip struct {
	Id	string    	`json:"id"`
	UserId	bson.ObjectId 	`json:"userid,omitempty"`
	Name    string   	`json:"name"`
	Places	[]Place  	`json:"places"`
}

