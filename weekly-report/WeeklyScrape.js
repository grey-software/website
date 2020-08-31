const { _ } = require("core-js");

getWeeklyInsights = async (link, repos) => {
  const cheerio = require("cheerio");
  const puppeteer = require("puppeteer");
  const fs = require("fs");
  const url = link;
  const repo = link.split("/")[4];

  const start = new Date();
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(url, { waitUntil: "networkidle0" });

  await page.waitForSelector(".octicon-git-merge", {
    visible: true
  });

  const pageContent = await page.content();

  const $ = cheerio.load(pageContent);
  var commitsToMaster = "";
  var authors = "";
  var files = "";
  var totalAdditions = "";
  var deletions = "";
  const startDate = $(".Subhead-heading")["0"].children[0].data.trim("\n");
  const endDate = $(".dash")["0"].next.data.trim("\n");

  //Scraping for img link

  $(".text-gray").each(function (i, elem) {
    if ($(elem).find("strong")["0"] != undefined) {
      commitsToMaster = $(elem)
        .find("strong")
        .find("span")["0"].children[0].data;
      authors = $(elem).find("strong")["0"].children[0].data;
      files = $(elem).find("strong")["3"].children[0].data;
      totalAdditions = $(elem).find("strong")["4"].children[0].data;
      deletions = $(elem).find("strong")["6"].children[0].data;
    }
  });

  $(".Box-row").each(function (i, elem) {
    if ($(elem).find("ul")[0] != undefined) {
      //console.log($(elem).find('ul').find('span')[0].children[0].data)
      /*console.log($(elem).find('ul').find('span')[2].children[0].data);
      console.log($(elem).find('ul').find('span')[4].children[0].data);
      console.log($(elem).find('ul').find('span')[6].children[0].data);*/

      const mergedPRs = $(elem)
        .find("ul")
        .find("svg")
      ["0"].next.data.trim("\n", " ");
      const openedPRs = $(elem)
        .find("ul")
        .find("svg")
      ["1"].next.data.trim("\n", " ");
      const newIssues = $(elem)
        .find("ul")
        .find("svg")
      ["2"].next.data.trim("\n", " ");
      const closedIssues = $(elem)
        .find("ul")
        .find("svg")
      ["3"].next.data.trim("\n", " ");

      repos.push({
        repo: repo,
        mergedPRs: mergedPRs,
        openedPRs: openedPRs,
        newIssues: newIssues,
        closedIssues: closedIssues,
        commitsToMaster: commitsToMaster,
        authors: authors,
        files: files,
        totalAdditions: totalAdditions,
        deletions: deletions,
        startDate: startDate,
        endDate: endDate
      });
    }
  });

  var jsonContent = JSON.stringify(repos);

  fs.writeFile("../content/this-week/repo-reports.json", jsonContent, "utf8", function (err) {
    if (err) {
      console.log("An error occured while writing JSON Object to File.");
      return console.log(err);
    }
  });

  await browser.close();
  const end = new Date() - start;
};

const links = [
  "https://github.com/grey-software/toonin/pulse",
  "https://github.com/grey-software/material-math/pulse",
  "https://github.com/grey-software/linkedin-focus/pulse",
  "https://github.com/grey-software/twitter-focus/pulse",
  "https://github.com/grey-software/grey.software/pulse",
  "https://github.com/grey-software/org/pulse"
];

const repos = [];

for (const link of links) {
  getWeeklyInsights(link, repos);
}
