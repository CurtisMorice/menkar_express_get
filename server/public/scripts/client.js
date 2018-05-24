console.log('JS');

$(document).ready(readyNow);

function readyNow() {
    console.log('JQ');
    $('#submit').on('click', addQuote);
    $.ajax({
        method: "GET",
        url: "/quote",

    }).then(function(response) {
        console.log('back from server with', response);
        showQuotes(response);
        addQuote();
    });


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
}

function showQuotes(quotesArray) {
    let qList = $('#qList');
    qList.empty();
    for (let quote of quotesArray) {
        console.log(quote);
        qList.append(`<li><em>${quote.author}  :  ${quote.quote}</em></li>`);
    } //end of for/of loop

} //end of showQuotes