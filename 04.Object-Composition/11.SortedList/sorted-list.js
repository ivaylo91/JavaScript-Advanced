function getSortedList() {
    let list = [];

    let sortedList = {

        add: function (args) {
            list.push(args);
            list.sort((a, b) => (a - b));
        },
        remove: function (index) {
            list.splice(index, 1);
        },
        get: function (index) {
            return list[index];
        },
        size: function () {
            return list.length;
        },
        toString: function () {
            return list;
        }
    };
    return sortedList;
}

let list = getSortedList();
list.add(2);
list.add(3);
list.add(4);
list.add(15);
list.add(8);
list.add(10);
list.add(7);
list.remove(3);
console.log(list.get(3));
console.log(list.size());
console.log(list.toString());