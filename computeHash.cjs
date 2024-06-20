const crypto = require('crypto');
const https = require('https');

const url = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css';

https.get(url, (res) => {
  const hash = crypto.createHash('sha384');
  res.on('data', (chunk) => hash.update(chunk));
  res.on('end', () => {
    const integrity = hash.digest('base64');
    console.log(`sha384-${integrity}`);
  });
}).on('error', (e) => {
  console.error(`Got error: ${e.message}`);
});