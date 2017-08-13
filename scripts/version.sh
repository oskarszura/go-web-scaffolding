#!/usr/bin/sh

VERSION=$(git tag | tail -n 1)

echo "gGenerating version="$VERSION

sed "s/%VERSION%/\"$VERSION\"/g" $1 > $2
