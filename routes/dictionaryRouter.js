var express = require('express');
var dictionaryRouter = express.Router();
var axios = require('axios')

dictionaryRouter.get("/list", (req, res) => {
  const lang = 'pl'
  axios.get(`https://api.pons.com/v1/dictionaries?language=${lang}`)
    .then(response => {

      res.json(response.data)
    })
    .catch(error => {
      console.log(error);
    });
})

dictionaryRouter.get("/translate", (req, res) => {

  const word = req.query.word || "samochód";
  const lang = req.query.lang || "depl";

  var data = '';

  var config = {
    method: 'get',
    url: 'https://api.pons.com/v1/dictionary',
    params: {
      "q": word,
      "l": lang
    },
    headers: {
      'X-Secret': '74a7d370f70cd1654902d8459d411e685b005cc2fdd7091e664f7b79a4a6c9d9'
    },
    data: data
  };

  axios(config)
    .then(function (response) {
      res.json(response.data)
    })
    .catch(function (error) {
      console.log(error);
    });
})


module.exports = dictionaryRouter