const UntappdClient = require("./untappedClient.js");

main();

async function main() {
  const userList = [
    "eurniee",
    "DriesWets",
    "BassieWouters",
    "Den_Henry",
    "zico_van_acker_3579",
    "Tommiexp",
    "Mattheus_",
    "ellenvaneyken",
    "bert_haverals_3063",
    "Aphroditi",
    "Arne11",
  ];
  let client = new UntappdClient();
  let information = await client.retrieveInformation(userList);
  let stringInformation = [];
  information.forEach((person) =>
    stringInformation.push(JSON.stringify(person))
  );
  var fs = require("fs");
  fs.writeFile(
    "../database/data.json",
    "[" + stringInformation.toString() + "]",
    function (err) {
      if (err) {
        return console.log(err);
      }
      console.log("The file was saved!");
    }
  );
}
