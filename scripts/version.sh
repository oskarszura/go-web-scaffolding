#!/usr/bin/sh

VERSION=$(git tag | tail -n 1)

sed "s/%VERSION%/\"$VERSION\"/g" $1 > $2
