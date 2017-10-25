function extractText(){
    /*let result = [];

    $('#items').find('li').each((index,element)=>result.push(element.textContent));
    $('#result').text(result.join(','));*/

    $('#result').text($('#items').find('li').toArray().map(e=>e.textContent).join(','));
}