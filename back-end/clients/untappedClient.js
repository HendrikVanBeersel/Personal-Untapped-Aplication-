const https = require("https");
const fs = require("fs");
const path = require("path");
const { Console } = require("console");

module.exports = class UntappdClient {
  clientID;
  clientSecret;
  accessToken;

  constructor() {
    require("dotenv").config();

    this.clientID = process.env.CLIENT_ID;
    this.clientSecret = process.env.CLIENT_SECRET;
    this.accessToken = process.env.ACCESS_TOKEN;
  }

  get(givenPath) {
    const options = {
      hostname: "api.untappd.com",
      port: 443,
      path: givenPath,
      method: "GET",
    };

    let promise = new Promise((resolve, reject) => {
      https
        .get(options, (res) => {
          // console.log('statusCode:', res.statusCode);
          // console.log('headers:', res.headers);

          let result = "";

          res
            .on("data", (d) => {
              //process.stdout.write(d);
              result += d;
            })
            .on("end", () => {
              resolve(JSON.parse(result));
            });
        })
        .on("error", (e) => {
          //console.error(e);
          reject(e);
        });
    });

    return promise;
  }

  async retrieveInformation(listOfUsers) {
    let result = [];
    for (let i = 0; i < listOfUsers.length; i++) {
      let user = listOfUsers[i];
      let data = await this.get(
        `/v4/user/info/${listOfUsers[i]}?access_token=${this.accessToken}`
      );
      let realName = data.response.user.first_name.concat(
        " ",
        data.response.user.last_name
      );
      result.push({
        user:user,
        name:realName,
        uniqueBeers:data.response.user.stats.total_beers,
        checkins:data.response.user.stats.total_checkins,
        badges:data.response.user.stats.total_badges,
    });
    }
    return result;
  }

  sortInformation(listOfInformation) {
    // number of unique beers
    let numberOfUniqueBeersList = [...listOfInformation].sort((a, b) => {
      return b[2] - a[2];
    });
    numberOfUniqueBeersList.unshift("number_unique_beers");

    // number of total beers
    let numberOfTotalBeersList = [...listOfInformation].sort((a, b) => {
      return b[3] - a[3];
    });
    numberOfTotalBeersList.unshift("number_total_beers");

    // number of badges
    let numberOfBadgesList = [...listOfInformation].sort((a, b) => {
      return b[4] - a[4];
    });
    numberOfBadgesList.unshift("number_badges");

    let combination = [
      numberOfUniqueBeersList,
      numberOfTotalBeersList,
      numberOfBadgesList,
    ];
    return combination;
  }
};
