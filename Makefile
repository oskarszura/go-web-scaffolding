GOCMD=go
GOBUILD=$(GOCMD) build

NPM=npm
NPMBUILD=$(NPM) run build

ELMPKG=elm-package

VERSION = $$(git tag | tail -n 1)

.DEFAULT_GOAL := all

.PHONY: install
install:
	@NPM install
	@ELMPKG install --yes

.PHONY: all
all:
	$(GOBUILD)
	$(NPMBUILD)

.PHONY: version
version:
	@echo "Version: ${VERSION}"

