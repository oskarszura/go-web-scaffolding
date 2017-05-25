package utils

import "testing"

func TestUrlPatternToRegExp(t *testing.T) {
	inputUrl := "/path1/path2/{id}/"
	expectedRegExp := "/path1/path2/{[.]*}/"
	finalUrl := UrlPatternToRegExp(inputUrl)

	if finalUrl != "/path1/path2/{[.]*}/" {
		t.Errorf("Transformed url is not correct, got: %d, want: %d.", finalUrl, expectedRegExp)
	}
}
