#!/bin/sh
#This script creates an auto commit to update user insights JSON file
echo script start >> test2.txt
git checkout github-insights
echo checkout complete >> test2.txt
git pull --force
echo pull complete >> test2.txt
node GithubScrape.js
echo scrape executed >> test2.txt
git add user-insights.json
echo insights added >> test2.txt
timestamp(){
    date +"at %H:%M:%S on %d/%m/%Y"
}
git commit -m "Automatic update to user insights"
echo commit complete >> test2.txt
git push
echo push complete >> test2.txt

