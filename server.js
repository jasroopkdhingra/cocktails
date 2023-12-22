const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;


app.get('/cocktail', (req, res) => {
  const query = req.query.q;

  res.json({ /* Your cocktail data based on the search query */ });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});