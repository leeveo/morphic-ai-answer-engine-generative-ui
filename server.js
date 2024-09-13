const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const imagesDir = path.join(__dirname, 'public/images');

app.use(express.static('public'));

app.get('/api/images', (req, res) => {
  fs.readdir(imagesDir, (err, files) => {
    if (err) {
      return res.status(500).send('Unable to scan directory');
    }
    res.json(files);
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});