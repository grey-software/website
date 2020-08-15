


getGithubInsights = async () => {
  const cheerio = require('cheerio');
  const puppeteer = require('puppeteer');
  const fs = require('fs');
  const url = 'https://github.com/grey-software/grey.software/graphs/contributors';

  const start = new Date()
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(url, { waitUntil: 'networkidle0' });


  await page.waitForSelector('#contributors', {
    visible: true,
  })

  const pageContent = await page.content()

  const $ = cheerio.load(pageContent);
  
  //Variables defining user contribution
  const avatars = [];
  const usernames = [];
  const ranks = [];
  const commits = [];
  const additions = [];
  const deletions = [];
  const users = [];
  var user = {avatar: "", rank: "", commits: "", additions: "", deletions: ""}


  //Scraping for img link 
  $('.contrib-person').each(function (i, elem) {
    const avatar = $(elem).find('img')[0].attribs.src
    const rank = (elem.children[0]).children[0].children[1].children[0].data;
    const additions = $(elem).find('.text-green')[0].children[0].data.slice(0, -3)
    const deletions = $(elem).find('.text-red')[0].children[0].data.slice(0, -3)
    const commits = $(elem).find('.cmeta')[0].children[0].children[0].data
    const username = $(elem).find('.text-normal')[1].children[0].data




    users.push({
        avatar: avatar,
        rank: rank,
        commits: commits,
        username: username,
        additions: additions,
        deletions: deletions
    
    });

    

  });


  var jsonContent = JSON.stringify(users);

  fs.writeFile("user-insights.json", jsonContent, 'utf8', function (err) {
    if (err) {
        console.log("An error occured while writing JSON Object to File.");
        return console.log(err);
    }
 
  });
 


  

  await browser.close();
  const end = new Date() - start
};

module.exports = { getGithubInsights }
getGithubInsights();





