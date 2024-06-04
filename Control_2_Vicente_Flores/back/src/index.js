const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.get('/api/search', async (req, res) => {
  const query = req.query.query;
  try {
    const response = await axios.get(`https://api.chucknorris.io/jokes/search?query=${query}`);
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching data from API:', error);
    res.status(500).send('Error fetching data from API');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
