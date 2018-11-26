const express = require('express');
const os = require('os');

const app = express();

  const colors = [
  {
	  "name": "Server",
	  "description": "lalalal"
	  },
	 {
	  "name": "Server",
	  "description": "blablabla"
	  },
 {
	  "name": "Server",
	  "description": "vavava"
 }
];

app.use(express.static('dist'));
app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));
app.get('/api/getColors', (req, res) => res.send({ colors: colors }));
app.listen(8080, () => console.log('Listening on port 8080!'));
