package utils

import (
	"regexp"
)

func UrlPatternToRegExp(urlPattern string) string {
	paramsRegExp, _ := regexp.Compile(`{[a-zA-Z0-9]*}`)

	finalUrl := paramsRegExp.ReplaceAllStringFunc(urlPattern, func(urlItem string) string {
		return "{[.]*}"
	})

	return finalUrl
}
