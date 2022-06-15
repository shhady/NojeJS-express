const { default: axios } = require('axios');
const express = require('express');
const cors = require('cors');
const route = require('./routes/wether.route');
const app = express();

app.use(cors());
app.use('/', route);

// app.get('/weather/:city', async (req, res) => {
//   try {
//     const { city } = req.params;
//     const { data } = await axios.get(
//       `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2990c3e2c8639b72fb985d6cf8fb1840`
//     );

//     res.status(200).send({ K: data.main.temp });
//   } catch (e) {
//     res.status(400).send(e);
//   }
// });

const PORT = process.env.PORT || 5000;

app.listen(PORT, (req, res) => {
  console.log('Listen to port: ' + PORT);
});
