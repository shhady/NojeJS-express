const express = require('express');
const route = express.Router();
const axios = require('axios').default;

route.get('/weather/:city', async (req, res) => {
  try {
    const { city } = req.params;
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2990c3e2c8639b72fb985d6cf8fb1840`
    );

    res.status(200).send({ K: data.main.temp });
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = route;
