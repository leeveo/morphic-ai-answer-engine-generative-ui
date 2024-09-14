const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.get('/random-images', (req, res) => {
  const imagesDir = path.join(__dirname, 'public/images');
  fs.readdir(imagesDir, (err, files) => {
    if (err) {
      console.error('Unable to scan directory:', err);
      return res.status(500).send('Unable to scan directory');
    }
    const randomImages = files.sort(() => 0.5 - Math.random()).slice(0, 3);
    console.log('Random images selected:', randomImages); // Log the selected images
    res.json(randomImages);
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});