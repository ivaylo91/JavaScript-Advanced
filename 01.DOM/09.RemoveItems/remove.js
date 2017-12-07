function addItems() {
    let text = document.getElementById("newValue").value;
    let list = document.getElementById("items");
    let li = document.createElement("li");
    let deleteLink = document.createElement('a');
    deleteLink.textContent = '[Delete]';
    deleteLink.href = "#";
    deleteLink.addEventListener('click', deleteItem);
    li.appendChild(document.createTextNode(text + " "));
    li.appendChild(deleteLink);
    list.appendChild(li);
    document.getElementById("newValue").value = '';

    function deleteItem() {
        document.getElementById('items').removeChild(li);
    }
}