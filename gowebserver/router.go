package gowebserver

import (
	"regexp"
	"net/http"
	"log"
	"github.com/oskarszura/trips/gowebserver/utils"
)

type ControllerHandler func(http.ResponseWriter, *http.Request)

type UrlRoute struct {
	urlRegExp string
	method    string
	handler	  ControllerHandler
}

type UrlRouter struct {
	urlRoutes 		[]UrlRoute
	pageNotFoundController	ControllerHandler
}

func (router *UrlRouter) findRoute (path string) UrlRoute {
	for _, v := range router.urlRoutes {
		pathRegExp := regexp.MustCompile(v.urlRegExp)

		if (pathRegExp.MatchString(path)) {
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
	pathRegExp := utils.UrlPatternToRegExp(urlPattern)

	router.urlRoutes = append(router.urlRoutes, UrlRoute{
		urlRegExp: pathRegExp,
		handler: pathHandler,
	})
}

func (router *UrlRouter) AddNotFoundRoute(pathHandler ControllerHandler) {
	router.pageNotFoundController = pathHandler
}
