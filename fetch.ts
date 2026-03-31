import https from 'https';
https.get('https://raw.githubusercontent.com/qwertyuiop246890-crypto/cuibo-wms/main/src/index.css', (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => console.log(data));
});
