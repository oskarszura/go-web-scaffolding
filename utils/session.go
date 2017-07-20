package utils

import (
	"net/http"
    "github.com/oskarszura/trips/models"
    "log"
)

type Session struct {
    Variables map[string]interface{}
}

var (
    loggedUser models.User
    sessions map[string]Session
)

func InitializeSessions() {
    sessions = make(map[string]Session)
}

func CreateSession(sessionId string) Session {
    if persistedSession, ok := sessions[sessionId]; ok {
        return persistedSession
    }

    session := Session {
        Variables: make(map[string]interface{}),
    }

    sessions[sessionId] = session

    return session
}

func (session *Session) Get(key string) interface{} {
    log.Println("----- session.Get", session.Variables[key])
    return session.Variables[key]
}

func (session *Session) Set(key string, value interface{}) {
    log.Println("----- session.Set", value)
    session.Variables[key] = value
}

func IsLogged(r *http.Request) bool {
	_, err := r.Cookie("sid")
	isLogged := false

	if err != nil {
		isLogged = true
	}

	return isLogged
}

