#!/usr/bin/env sh

# abort on errors
set -e

# handle flags
while getopts m: flag
do
    case "${flag}" in
        m) message=${OPTARG};;
    esac
done

# build
npm run build

# navigate into the build output directory
cd dist/

# deploy into iamkentleom.github.io
git init
git branch -m master
git add .
git commit -S -m "$message"
git push --set-upstream -f git@github.com:iamkentleom/iamkentleom.github.io.git master

cd -

echo 'Done.'