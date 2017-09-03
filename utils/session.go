package utils

import (
	"net/http"
)

type Session struct {
    Variables map[string]interface{}
}

var (
    sessions map[string]Session
)

func InitializeSessions() {
    sessions = make(map[string]Session)
}

func GetSessions() map[string]Session {
    return sessions
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
    return session.Variables[key]
}

func (session *Session) Set(key string, value interface{}) {
    session.Variables[key] = value
}

func IsLogged(r *http.Request) bool {
	sessionCookie, err := r.Cookie("sid")

	if err != nil {
        return true
	}

    if _, ok := sessions[sessionCookie.Value]; ok {
        return true
    }

	return false
}

