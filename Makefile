GO := go
NPM := npm
ELMPKG := elm-package
VERSION = $$(git tag | tail -n 1)

.DEFAULT_GOAL := all

.PHONY: install
install:
	@NPM install
	@ELMPKG install --yes

.PHONY: all
all:
	@GO build
	@NPM run build

.PHONY: version
version:
	@echo "Version: ${VERSION}"

