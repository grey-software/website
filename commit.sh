#!/bin/sh
#This script creates an auto commit to update user insights JSON file
git pull --force
node GithubScrape.js
git add user-insights.json

timestamp(){
    date +"at %H:%M:%S on %d/%m/%Y"
}
git commit -m "Automatic update to user insights"
git push origin master


