const express = require('express');
const app = express();

const root = __dirname + "/dist/music-store-app-frontend";

app.use(express.static(root));

app.get('*', (_req, res) => 
{
  res.sendFile('index.html', {root: root})
});

app.listen(process.env.PORT || 8081);