require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const axios = require("axios");

const app = express();

app.use(morgan("dev"));
app.use(express.static("dist"));
app.use(express.static("public"));

app.get("/api", function(req, res) {
  const key = process.env.OMDB_API_KEY;
  const cacheS = {};
  var s;
if (!(req.query.s in cacheS) && req.query.s !== undefined) {
    axios
    .get('http://www.omdbapi.com', { params: { apikey: key, s: req.query.s, plot: 'full', type: 'movie' }})
    .then(function(response){
        const dataObj = response.data.Search;
        const hydrate = dataObj.map(movie =>
          axios.get(`http://www.omdbapi.com?apikey=6d80ea04&i=${movie.imdbID}`)
        );
        Promise.all(hydrate)
          .then(function(values) {
            const newData = values.map(movie => movie.data);
            cacheS[req.query.s] = newData;
            res.status(200).send(newData);
          })
          .catch(err => console.log(err.message));
      })
      .catch(function(err) {
        console.log(err);
      });
  } else {
    if (req.query.s in cacheS) {
      res.status(200).send(cacheS[req.query.s]);
    }
  }
});

module.exports = app;
