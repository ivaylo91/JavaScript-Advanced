function addItems() {

    let list = document.getElementById('items');
    let newValue = document.getElementById('newValue').value;
    let items = document.createElement('li');

    items.appendChild(document.createTextNode(newValue));
    list.appendChild(items);
}