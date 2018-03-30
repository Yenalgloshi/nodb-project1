const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use( bodyParser.json() );

app.get('/api/stuff', (req, res) => { 

});  

app.post('/api/stuff', (req, res) => { 

});  

app.put('/api/stuff/:id', (req, res) => { 

});  

app.delete('/api/stuff/:id', (req, res) => { 

});

const port = 3005;
app.listen(port, () => {console.log(`Malicious marketers are listening on port ${port}`)})

// app.get('/api/stuff', (req, res) => {
//     res.status(200).send(stuff)
// })