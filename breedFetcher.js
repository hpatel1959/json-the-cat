const request = require('request');

let input = process.argv[2];



request(`https://api.thecatapi.com/v1/breeds/search?q=${input}`, (error, response, body) => {
  if (error) {
    console.log(error);
    process.exit();
  }
  try {
    const data = JSON.parse(body);
    console.log(data[0].description);
  } catch (error) {
    console.log(error.name + "\n", "\r" + "Unable to find description for breed: " + `${input}`);
  }
});
