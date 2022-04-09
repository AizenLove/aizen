#!/bin/bash

if [ -f ./openapi.json ]; then
  rm ./openapi.json
fi

if [ -d ./src/api ]; then
  rm -rf src/api;
fi;

curl http://localhost:80/openapi.json > ./openapi.json
yarn openapi2aspida
