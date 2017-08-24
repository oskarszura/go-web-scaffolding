VERSION=$(shell git tag | tail -n 1)

CHANGELOG=$(shell ./scripts/changelog.sh)

GIT=git
GITTAG=$(GIT) tag
GITADD=$(GIT) add
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
	$(GITTAG) --delete $(V) || true
	$(GITTAG) $(V)
	$(CHANGELOG)
	$(GITADD) ./docs/changelogs/CHANGELOG_$(V).md || true
	$(GITCOMMIT) -m "Generate changelog for $(V)" || true
	$(GOGENERATE)
	$(GITADD) ./version.go || true
	$(GITCOMMIT) --allow-empty -m "Build $(V)" || true
	$(GITTAG) --delete $(V) || true
	$(GITTAG) $(V)

.PHONY: help
help:
	@echo  'Available tasks:'
	@echo  '* Installation:'
	@echo  '- install         - Phony task that installs all required (client'
	@echo  '                    and server - sided) dependencies'
	@echo  ''
	@echo  '* Build:'
	@echo  '- all (default)   - Default phony task that builds (client and'
	@echo  '                    and server - sided) binaries'
	@echo  ''
	@echo  '* Release:'
	@echo  '- version         - Phony task. Creates changelog from latest'
	@echo  '                    git tag till the latest commit. Creates commit'
	@echo  '                    with given version (as argument) and tags'
	@echo  '                    this commit with this version. Version has to'
	@echo  '                    be passed as `V` argument with ex. `v0.0.0`'
	@echo  '                    format'
	@echo  ''
	@echo  '* Miscellaneous'
	@echo  '- changelog       - Phony task. Creates changelog from latest'
	@echo  '                    git tag till the latest commit.'
	@echo  ''


