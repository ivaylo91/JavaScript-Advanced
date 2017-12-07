function sum() {
    let rows = document.querySelectorAll('table tr td');
    let sum = 0;
    for (let i = 1; i < rows.length; i += 2) {

        sum += Number(rows[i].textContent);
    }
    document.getElementById('sum').textContent = sum;
}