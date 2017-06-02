package gowebserver

import (
	"regexp"
	"strings"
	"net/http"
	"log"
	"github.com/oskarszura/trips/gowebserver/utils"
)

type ControllerHandler func(http.ResponseWriter, *http.Request)

type UrlRoute struct {
	urlRegExp string
	method    string
	handler	  ControllerHandler
	params	  map[string]int
}

type UrlRouter struct {
	urlRoutes 		[]UrlRoute
	pageNotFoundController	ControllerHandler
}

func (router *UrlRouter) findRoute (path string) UrlRoute {
	for _, v := range router.urlRoutes {
		pathRegExp := regexp.MustCompile(v.urlRegExp)

		if pathRegExp.MatchString(path) {
			return v
		}
	}
	return UrlRoute{
		handler: router.pageNotFoundController,
	}
}

func (router *UrlRouter) route(w http.ResponseWriter, r *http.Request)  {
	urlPath := r.URL.Path
	route := router.findRoute(urlPath)

	log.Println("Navigating to url = " + urlPath + " vs route = " + route.urlRegExp)

	routeHandler := route.handler
	routeHandler(w, r)
}

func (router *UrlRouter) AddRoute(urlPattern string, pathHandler ControllerHandler) {
	params := make(map[string]int)
	pathRegExp := utils.UrlPatternToRegExp(urlPattern)

	urlPathItems := strings.Split(urlPattern, "/")

	for i := 0; i < len(urlPathItems); i++ {
		paramKey := urlPathItems[i]
		isParam, _ := regexp.MatchString(`{[a-zA-Z0-9]*}`, paramKey)

		if isParam {
			params[paramKey] = i
		}
	}

	router.urlRoutes = append(router.urlRoutes, UrlRoute{
		urlRegExp: pathRegExp,
		handler: pathHandler,
		params: params,
	})
}

func (router *UrlRouter) AddNotFoundRoute(pathHandler ControllerHandler) {
	router.pageNotFoundController = pathHandler
}