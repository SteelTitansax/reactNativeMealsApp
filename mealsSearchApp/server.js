const express = require('express');
const path = require('path');

const app = express();
const DIST_DIR = path.join(__dirname, 'dist');
const PORT = process.env.PORT;

// Static files (JS, CSS, ...)
app.use(express.static(DIST_DIR));

// Redirect routes to index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(DIST_DIR, 'index.html'));
});

// Assign port to Azure App Services
app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
