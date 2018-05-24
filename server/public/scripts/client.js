console.log('JS');
let fakeArray = [3, 6];

$(document).ready(readyNow);

function readyNow() {
    console.log('JQ');
    $('#submit').on('click', addQuote);
    getQuotes();
    randomQuote(fakeArray);

}




function addQuote() {
    console.log(`in addQuote`);
    let quoteToAdd = {
        author: $('#author').val(),
        quote: $('#quote').val()

    }; //end of quoteToAdd
    console.log('sending:', quoteToAdd);
    $.ajax({
        method: 'POST',
        url: '/quote',
        data: quoteToAdd
    }).then(function(response) {
        console.log('back from server with:', response);
        getQuotes(response);

    }); // end ajax

}

function getQuotes() {
    console.log(`in getQuotes`);
    //$('#refreshButton').on('click', showQuotes);
    $.ajax({
        method: "GET",
        url: "/quote",
    }).then(function(response) {
        console.log('back from server with', response);
        showQuotes(response);
        // addQuote();
    });

}

function randomQuote(quotesArray) {
    let random = $('#random');
    let randomQ = Math.floor((Math.random() * quotesArray.length));
    console.log('is it working?', randomQ);
    random.empty();
    random.append(`<li>${randomQ}</li>`);
    for (let rand of quotesArray) {
        console.log(`rand`);
        random.append(`<li><em>${rand.author}  : "${rand.quote}"</em></li>`);
    }

}

function showQuotes(quotesArray) {
    let qList = $('#qList');
    qList.empty();
    for (let quote of quotesArray) {
        console.log(quote);
        qList.append(`<li><em>${quote.author}  : "${quote.quote}"</em></li>`);
    } //end of for/of loop

} //end of showQuotes