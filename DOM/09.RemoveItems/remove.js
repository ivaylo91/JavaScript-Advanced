function addItems() {
    let text = document.getElementById("newValue").value;
    let list = document.getElementById("items");
    let li = document.createElement("li");
    let span = document.createElement('span');
    span.innerHTML = "<a href='#'>[Delete]</a>";
    span.firstChild.addEventListener('click', deleteItem);
    li.appendChild(document.createTextNode(text + " "));
    li.appendChild(span);
    list.appendChild(li);
    document.getElementById("newValue").value = '';

    function deleteItem() {
        let li = this.parentNode.parentNode;
        let ul = li.parentNode;
        ul.removeChild(li);
    }
}