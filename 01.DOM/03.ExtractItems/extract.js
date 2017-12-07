function extractText() {

    let result = document.getElementById('result');
    result.value = '';
    let items = document.querySelectorAll('ul li');

    for(let i=0; i< items.length; i++){

      result.value += items[i].textContent + '\n';
    }
}