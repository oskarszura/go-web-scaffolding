VERSION=0.0.3 #$(shell git tag | tail -n 1)

GOCMD=go
GOBUILD=$(GOCMD) build -ldflags '-X main.VERSION=0.0.3'

NPM=npm
NPMINSTALL=$(NPM) install
NPMBUILD=$(NPM) run build

ELMPKG=elm-package
ELMPKGINSTALL=$(ELMPKG) install --yes

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
	@echo "Version: $(VERSION)"

