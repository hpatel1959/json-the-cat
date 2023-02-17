const fetchBreedDescription = require('./breedFetcher').fetchBreedDescription;

let input = process.argv[2];

fetchBreedDescription(input, (error, description) => {
  if (error) {
    return console.log("Error fetch details: ", error);
  }
  console.log(description);
});