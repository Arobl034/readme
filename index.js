const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");

inquirer
  .prompt({
    message: "Enter your GitHub username:",
    name: "username"
  })
  .then(function({ username }) {

  
    const queryUrl = `https://api.github.com/users/${username}/public_email`;

    axios.get(queryUrl).then(function(res) {
        console.log(res)
      const publicEmail = res.data.map(function(repo) {
        return public_email;
      });



      const repoNamesStr = repoNames.join("\n");

      fs.writeFile("readme.md", repoNamesStr, function(err) {
        if (err) {
          throw err;
        }

        console.log(`Saved ${repoNames.length} repos`);
      });
    });
  });
