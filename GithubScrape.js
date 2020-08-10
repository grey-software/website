
const cheerio = require('cheerio');
const puppeteer = require('puppeteer');
const url = 'https://github.com/grey-software/grey.software/graphs/contributors';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  await page.waitForSelector('#contributors', {
    visible: true,
  })

  const pageContent = await page.content()

  const $ = cheerio.load(pageContent);
  $('.contrib-person').each(function (i, elem) {
    console.log(elem)
  });
  await browser.close();
})();


// puppeteer
//   .launch()
//   .then(function(browser) {
//     return browser.newPage();
//   })
//   .then(function(page) {
//     return page.goto(url).then(function() {
//       page.waitForSelector('.contrib-person', {
//         visible: true,
//       }).then(function() {  
//         return page.content();
//       })
//     });
//   })


//   .then(function(html) {
//     console.log(html);
//     const $ = cheerio.load(html); 
//     let contributors = [];
//     $('.graphs').each(function(i, elem) {
//         contributors[i] = $(this).text().trim();
//         //console.log($(elem).text().trim());
//     });
//     console.log(contributors);       


//   })



//   .catch(function(err) {

//     console.log(err);
//   });






// /*window.addEventListener('DOMContentLoaded', function() {

//     axios.get('https://github.com/grey-software/grey.software/graphs/contributors')
//         .then((response) => {
//             if(response.status === 200) {
//                 const $ = cheerio.load(response.data); 
//                 let contributors = [];
//                 $('.graphs').each(function(i, elem) {
//                     contributors[i] = $(this).text().trim();
//                     //console.log($(elem).text().trim());



//                 });
//                 console.log(contributors);
//             }

//     }, (error) => console.log(err) );   
// });*/        


// /*const casperjs = require("casperjs");
// const casper = casperjs.create();


// casper.start();
// casper.open('https://github.com/grey-software/grey.software/graphs/contributors');
// casper.then(function() {
//     //Sanity check
//     this.test.assertExists("#nav-check");
//     var links = this.evaluate(function(){
//         var results = []; 
//         var elts = document.getElementsByClassName("graphs");
//     });    



// });
// casper.run();*/




