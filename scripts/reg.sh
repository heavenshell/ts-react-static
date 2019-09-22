#!/bin/sh

function prepare () {
  mkdir -p ./dist/storybook
  rm -rf ./dist/__regressions__
  mkdir -p ./dist/__regressions__/{expected,actual}
  yarn build-storybook -o ./dist/storybook
  yarn screenshot -o ./dist/__regressions__/actual
}

function download () {
  echo "wget expected file"
  wget https://heavenshell.netflify.com/__regressions__/expected/files.tar.gz
  if [ -e files.tar.gz ]; then
    mv files.tar.gz ./dist/__regressions__/expected/files.tar.gz
    echo "unzip file.tar.gz"
    tar xzf ./dist/__regressions__/expected/files.tar.gz ./dist/__regressions__/exptected
  fi
}

function run_reg () {
  reg-cli ./dist/__regressions__/actual ./dist/__regressions__/expected ./dist/__regressions__/reports/ -R ./dist/__regressions__/report.html
  mv reg.json ./dist/__regressions__/.
}


function compress () {
  if [ -d ./dist/__regressions__/expected ]; then
    echo "compress files and move to exptected"
    tar czf ./dist/__regressions__/expected/files.tar.gz ./dist/__regressions__/actual
  fi
}

prepare
download
run_reg
compress
