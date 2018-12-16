[![Build Status](https://travis-ci.org/oskarszura/trips.svg?branch=master)](https://travis-ci.org/oskarszura/trips)

# Trips

[[Documentation]]()
[[Tasks board]](https://trello.com/b/CgTjQgmf/project-oskarszura)
[[TravisCI]](https://travis-ci.org/oskarszura/trips)
[[Stage ENV]](https://golang-scaffolding.herokuapp.com)

## Development flow

#### Setup project
* `$ make install` - installs all required dependencies (for now only npm + elm)

#### Development project
* `$ make` - builds server and client side binaries

#### Create project release
* `$ make version V=v0.0.0` - create changelog with all the changes from the latest version till the latest commit. Creates commit with version and tags it.
* Don't forget to push automatically generated build to the remote repository
