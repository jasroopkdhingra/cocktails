const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Define a route for the root URL
app.get('/', (req, res) => {
  res.send('Hello, this is your Cocktail Recipe Generator backend!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

