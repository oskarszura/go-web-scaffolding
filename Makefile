GOCMD=go
GOBUILD=$(GOCMD) build

NPM=npm
NPMINSTALL=$(NPM) install
NPMBUILD=$(NPM) run build

ELMPKG=elm-package
ELMPKGINSTALL=$(ELMPKG) install --yes

VERSION = $$(git tag | tail -n 1)

.DEFAULT_GOAL := all

.PHONY: install
install:
	$(NPMINSTALL)
	$(ELMPKGINSTALL)

.PHONY: all
all:
	$(GOBUILD)
	$(NPMBUILD)

.PHONY: version
version:
	@echo "Version: ${VERSION}"

