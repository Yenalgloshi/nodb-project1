const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controller');

const app = express();

app.use( bodyParser.json() );

app.get('/api/games', controller.read)

app.post('/api/games', controller.create);  

app.put('/api/games/:id', controller.update);  

app.delete('/api/games/:id', controller.delete);

const port = 3005;
app.listen(port, () => {console.log(`Malicious marketers are listening on port ${port}`)})

