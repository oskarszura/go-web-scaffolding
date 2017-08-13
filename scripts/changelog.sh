#!/bin/bash

REPOSITORY=http://github.com/oskarszura/trips
NEWER_TAG=$(git tag | tail -r | sed -n 1p)
OLDER_TAG=$(git tag | tail -r | sed -n 2p)
HEADER="# Changelog from $NEWER_TAG"
LOGFILE=./docs/changelogs/CHANGELOG_$NEWER_TAG.md

echo $HEADER > $LOGFILE
echo "### Commits" >> $LOGFILE

git log $OLDER_TAG..$NEWER_TAG --pretty=format:'* [[%H]('$REPOSITORY'/commit/%H)] - %s' >> $LOGFILE
