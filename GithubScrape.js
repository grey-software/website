
const cheerio = require('cheerio');
const puppeteer = require('puppeteer');
const url = 'https://github.com/grey-software/grey.software/graphs/contributors';

(async () => {
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
  const user = {avatar: "", rank: "", commits: "", additions: "", deletions: ""}

  //Scraping for img link 
  $('.contrib-person').each(function (i, elem) {
    avatars.push((elem.children[0]).children[0].children[0].children[0].attribs.src)
    
  });

  //Scraping for username
  $('.contrib-person').each(function (i, elem) {
    usernames.push((elem.children[0]).children[0].children[2].children[0].data);

  });

  //Scraping for rank
  $('.contrib-person').each(function (i, elem) {
    if((elem.children[0]).children[0].children[1].children[0] != null){
        ranks.push((elem.children[0]).children[0].children[1].children[0].data);
    }

  });


  //Scraping for commits, additions, and deletions 
  $('.contrib-person').each(function (i, elem) {
    commits.push((elem.children[0]).children[0].children[3].children[0].children[0].children[0].data);
    additions.push((elem.children[0]).children[0].children[3].children[0].children[2].children[0].data);
    deletions.push((elem.children[0]).children[0].children[3].children[0].children[4].children[0].data);
    

  });

  var count = 0;
  for(singleUser in usernames){
      users.push({
          avatar: avatars[count],
          rank: ranks[count],
          commits: commits[count],
          username: singleUser,
          additions: additions[count],
          deletions: deletions[count]
        
        
        });
      count += 1;

  }

  console.log(users);

  await browser.close();
})();





