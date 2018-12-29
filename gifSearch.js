
const  XMLHttpRequest = require('xhr2');

const gify = {};

gify.getGifs = (search, cb) => {
    const api_key = '4cf6bqA5DWvW9gTFDkVySuna4eWIRhDq';
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${search}`;
  
    let request = new XMLHttpRequest();
    request.open("GET", url);
    request.addEventListener('load', (response) => {
    
      const data = JSON.parse(response.currentTarget.response);
      
      const gifArray = [];
      data.data.forEach(currentGif => {
        const url = currentGif.images.original.url;
        gifArray.push(url);
        console.log('url is: ', url)
      });
  
      cb(gifArray);
    })
    request.send(null);
  }


  module.exports = gify;