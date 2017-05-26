package utils

import (
	"os"
	"gopkg.in/mgo.v2"
)

var DBSession *mgo.Session

func SetSession(session *mgo.Session) {
	DBSession = session
}

func GetSession() *mgo.Session {
	return DBSession
}

func GetDataSource() *mgo.Database {
	dbName := os.Getenv("DB_NAME")
	return DBSession.DB(dbName)
}