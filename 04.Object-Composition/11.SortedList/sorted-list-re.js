function sortedList() {
    return {
        internalArray: [],
        add: function (element) {
            this.internalArray.push(element);
            this.internalArray.sort((a, b) => a - b);
        },
        remove: function (index) {
            if (index >= 0 && index < this.internalArray.length) {
                this.internalArray.splice(index, 1);
            }
        },
        get: function (index) {
            if (index >= 0 && index < this.internalArray.length) {
                return this.internalArray[index];
            }
        },
        size: function () {
            return `Size:${this.internalArray.length}`;
        },
        toString: function () {
            return this.internalArray.join(' ');
        }
    }
}

let list = sortedList();
list.add(2);
list.add(3);
list.add(4);
list.add(15);
list.add(8);
list.add(10);
list.add(7);
console.log(list.toString());
list.remove(3);
console.log(list.toString());
console.log(list.get(0));
console.log(list.size());