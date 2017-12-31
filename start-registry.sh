#!/bin/sh

docker run -it --rm --name verdaccio -p 4873:4873 -v $(pwd)/repo:/verdaccio verdaccio/verdaccio
