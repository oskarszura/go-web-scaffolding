VERSION=$(shell git tag | tail -n 1)

CHANGELOG=$(shell ./scripts/changelog.sh)

GIT=git
GITTAG=$(GIT) tag
GITADD=$(GIT) add -A
GITCOMMIT=$(GIT) commit

GOCMD=go
GOGENERATE=$(GOCMD) generate
GOBUILD=$(GOCMD) build -o trips

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
	$(GOGENERATE)
	$(GOBUILD)
	$(NPMBUILD)

.PHONY: changelog
changelog:
	$(CHANGELOG)
	@echo "Changelog generated for version $(VERSION)"

.PHONY: version
version:
	$(GITTAG) $(V)
	$(CHANGELOG)
	$(GITADD)
	$(GITCOMMIT) -m "Generate changelog for $(V)"
	$(GITTAG) --delete $(V)
	$(GOGENERATE)
	$(GITADD)
	$(GITCOMMIT) -m "Build $(V)"
	$(GITTAG) $(V)


