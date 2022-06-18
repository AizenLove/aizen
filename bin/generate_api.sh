#!/bin/bash

if [ -f ./openapi.json ]; then
  rm ./openapi.json
fi

if [ -d ./src/api ]; then
  rm -rf src/api;
fi;

# 本番の叩くのアレなので別のやり方が良いかもしれない?
curl https://recommend.aizen.love/openapi.json > ./openapi.json
yarn openapi2aspida
