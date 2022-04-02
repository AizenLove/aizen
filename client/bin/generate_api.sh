#!/bin/bash

if [ -f ./openapi.json ]; then
  rm ./openapi.json
fi

if [ -d ./src/api ]; then
  rm -rf src/api;
fi;

curl http://localhost/openapi.json > ./openapi.json
yarn openapi2aspida
