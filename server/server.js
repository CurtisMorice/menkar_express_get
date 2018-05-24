//get Express
const express = require('express');
const app = express();
let bodyParser = require('body-parser');
const port = 5000;
let quotesArray = [];
app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
    console.log('Listening on port', port);

});

app.get('/quote', (req, res) => {
    console.log('In GET for /quote');

    res.send(quotesArray);


    //res.sendStatus(404);
});
app.post('/quote', (req, res) => {
    console.log('in POST hit for /quote route:', req.body);
    quotesArray.push(req.body.author, req.body.quote);
    //quotesArray.push(req.body.quote);
    res.sendStatus(200);
}); // end guests POST

quotesArray.push({
    author: "Oscar Wilde",
    quote: "Life is far too important of a thing to be taken seriously"
});
quotesArray.push({
    author: "Albert Einstein",
    quote: "You can't blame gravity for falling in love."
});
quotesArray.push({
    author: "Thomas Edison",
    quote: "I have not failed. I've just found 10,000 ways that won't work."
});
quotesArray.push({
    author: "Oscar Wilde",
    quote: "All of us live in the gutters but some of us are looking at the stars"
});
quotesArray.push({
    author: "Socrates",
    quote: "The only true wisdom is in knowing you know nothing."
});
quotesArray.push({
    author: "Steven Wright",
    quote: "If you think nobody cares about you, try missing a couple of payments"

});