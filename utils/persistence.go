package utils

import (
	"gopkg.in/mgo.v2"
)

var OpenSession *mgo.Session

func SetSession(session *mgo.Session) {
	OpenSession = session
}

func GetSession() *mgo.Session {
	return OpenSession
}