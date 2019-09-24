#!/bin/sh

function prepare () {
  echo "Prepare for reg-cli"
  mkdir -p ./dist/storybook
  rm -rf ./dist/__regressions__
  mkdir -p ./dist/__regressions__/{expected,actual,tmp}
  yarn build-storybook -o ./dist/storybook
  yarn screenshot -o ./dist/__regressions__/actual
  echo "zisui finished"
}

function download () {
  echo "wget expected file"
  wget https://heavenshell.netlify.com/__regressions__/expected/files.tar.gz
  if [ -e files.tar.gz ]; then
    mv files.tar.gz ./dist/__regressions__/tmp/files.tar.gz
    echo "unzip file.tar.gz"
    current=`pwd`
    cd ./dist/__regressions__/tmp
    tar xzfv files.tar.gz
    cd $current
    mv ./dist/__regressions__/tmp/expected ./dist/__regressions__/
    echo "move exptected to ./dist/__regressions__/exptected"
  fi
}

function run_reg () {
  echo "Run reg-cli"
  reg-cli ./dist/__regressions__/actual ./dist/__regressions__/expected ./dist/__regressions__/reports/ -R ./dist/__regressions__/report.html
  mv reg.json ./dist/__regressions__/.
  rm -rf ./dist/__regressions__/tmp/*
  cp -r ./dist/__regressions__/actual ./dist/__regressions__/tmp/expected
  echo "./dist/__regressions__/actual to ./dist/__regressions__/tmp/exptected"
}

function compress () {
  if [ -d ./dist/__regressions__/tmp ]; then
    echo "compress files and move to exptected"
    current=`pwd`
    cd ./dist/__regressions__/tmp
    echo `pwd`
    tar czf files.tar.gz ./expected
    cd $current
    mv ./dist/__regressions__/tmp/files.tar.gz ./dist/__regressions__/expected/.
    echo "move files.tar.gz to ./dist/__regressions__/exptected"
  fi
}

prepare
download
run_reg
compress
