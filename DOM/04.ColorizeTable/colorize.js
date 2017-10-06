function colorize() {

    let tr = document.querySelectorAll('table tr');

    for (let i = 1; i < tr.length; i += 2) {

        tr[i].style.backgroundColor = 'teal';
    }
}