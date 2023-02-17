const request = require('request');

// let input = process.argv[2];

let fetchBreedDescription = function(breed, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
    if (error) {
      callback(error, null);
      process.exit();
    }
    try {
      const data = JSON.parse(body);
      callback(null, data[0].description);
    } catch (error) {
      callback(`Unable to find ${breed}`, null);
    }
  });
};


module.exports = {
  fetchBreedDescription
};
