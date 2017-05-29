package utils

import (
	"os"
	"gopkg.in/mgo.v2"
	"github.com/oskarszura/trips/models"
)

var (
	dBSession *mgo.Session
	loggedUser models.User
)

func SetSession(session *mgo.Session) {
	dBSession = session
}

func GetSession() *mgo.Session {
	return dBSession
}

func SetUser(user models.User) {
	loggedUser.Username = user.Username
	loggedUser.Id = user.Id
}

func GetUser() models.User {
	return loggedUser
}

func GetDataSource() *mgo.Database {
	dbName := os.Getenv("DB_NAME")
	return dBSession.DB(dbName)
}