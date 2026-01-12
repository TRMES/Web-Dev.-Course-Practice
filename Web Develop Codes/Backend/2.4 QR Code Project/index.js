/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([{ message: " Enter the URL:", name: "URL" }])
  .then((answers) => {
    let getURL = answers.URL;
    var qr_png = qr.image(getURL, { type: "png" });
    qr_png.pipe(fs.createWriteStream("firstUrl.png"));

    fs.writeFile("URL.txt", getURL, (err) => {
      if (err) throw err;
      console.log("The file has been saved!");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log(error.isTtyError);
    } else {
      console.log`Error: ${error}`;
    }
  });
