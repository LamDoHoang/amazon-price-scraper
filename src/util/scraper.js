import puppeteer from "puppeteer-extra";
import StealthPlugin from "puppeteer-extra-plugin-stealth";
import { getRandom } from "random-useragent";

// Use stealth plugin
puppeteer.use(StealthPlugin());

const getQuotes = async () => {
  //start puppeteer session
  const browser = await puppeteer.launch({
    headless: false,
    args: [`--user-agent=${getRandom()}`],
  });

  //open a new page
  const page = await browser.newPage();

  // Set user agent
  await page.setUserAgent(
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
  );

  // Set viewport
  await page.setViewport({ width: 1280, height: 800 });

  //open the url
  //wait until the web fully mounted
  // Navigate to Amazon
  await page.goto(
    "https://www.amazon.com/New-Apple-AirPods-Max-Blue/dp/B08PZJ8FZ8/ref=sr_1_1?crid=3GMEDT5GLLUTU&dib=eyJ2IjoiMSJ9.cAD_qAApnyUKwmxqHeslw64zrfYndoZh8PAQpJnapOJ8l17uaS5rWPTQiHWhaKwcBvGUNs90r4-TGbrXvpIJ_hlZjSP9C90FNt81YitTFZbzaUn5bQjMhkmuo_uRGOlRSWW6T1jWP2wLs_UjRic_5gNyML3FWfJ1nWHYwAz4HAO3bQ_gzQodNy7xtzIB4kmMlR6Hz0J7Nm-TSEYflRuXWs7sWEGXc8BJj93GKYIihq8.0AtS6XrlzANVSumgn6mU-DO5tnsqbu8o63vTkMgh7t0&dib_tag=se&keywords=Airpods%2BMax%2B-%2BBlue&qid=1719892785&sprefix=%2Caps%2C318&sr=8-1&th=1",
    { waitUntil: "networkidle2" }
  );

  // // Get page data
  // const quotes = await page.evaluate(() => {
  //   // Fetch the first element with class "quote"
  //   const quote = document.querySelector(".quote");

  //   // Fetch the sub-elements from the previously fetched quote element
  //   // Get the displayed text and return it (`.innerText`)
  //   const text = quote.querySelector(".text").innerText;
  //   const author = quote.querySelector(".author").innerText;

  //   return { text, author };
  // });

  // // Display the quotes
  // console.log(quotes);

  // // Close the browser
  // await browser.close();
};

getQuotes();

// import axios from "axios";
// import cheerio from "cheerio";
// import fs from "fs";

// const fetchedData = async () => {
//   try {
//     const res = await axios.post(
//       "https://www.amazon.com/portal-migration/hz/glow/address-change?actionSource=glow",
//       {
//         actionSource: "glow",
//         deviceType: "web",
//         locationType: "LOCATION_INPUT",
//         pageType: "Detail",
//         storeContext: "apple-devices",
//         zipCode: "97215",
//       }
//     );

//     const response = await axios.get(
//       "https://www.amazon.com/New-Apple-AirPods-Max-Blue/dp/B08PZJ8FZ8/ref=sr_1_1?crid=3GMEDT5GLLUTU&dib=eyJ2IjoiMSJ9.cAD_qAApnyUKwmxqHeslw64zrfYndoZh8PAQpJnapOJ8l17uaS5rWPTQiHWhaKwcBvGUNs90r4-TGbrXvpIJ_hlZjSP9C90FNt81YitTFZbzaUn5bQjMhkmuo_uRGOlRSWW6T1jWP2wLs_UjRic_5gNyML3FWfJ1nWHYwAz4HAO3bQ_gzQodNy7xtzIB4kmMlR6Hz0J7Nm-TSEYflRuXWs7sWEGXc8BJj93GKYIihq8.0AtS6XrlzANVSumgn6mU-DO5tnsqbu8o63vTkMgh7t0&dib_tag=se&keywords=Airpods%2BMax%2B-%2BBlue&qid=1719892785&sprefix=%2Caps%2C318&sr=8-1&th=1",
//       {
//         headers: {
//           "X-User-Zipcode": "97215",
//         },
//       }
//     );
//     const html = response.data;
//     const $ = cheerio.load(html);
//     fs.writeFile("example.txt", res.data, (err) => {
//       if (err) throw err;
//       console.log("File has been saved!");
//     });

//     // Select the span element with the class "a-price-whole"
//     const price = $("span.a-price-whole").text();

//     console.log("Price:", price);
//   } catch (err) {
//     console.log(err);
//   }
// };

// fetchedData();
