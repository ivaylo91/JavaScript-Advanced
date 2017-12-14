let strProcessor = (function () {
    let list = [];

    function add(string) {
        list.push(string);
    }
    function remove(string) {
        list = list.filter(e=>e !== string);
    }
    function print() {
        console.log(list.join(','));
    }
    return {
        add,
        remove,
        print
    }
})();


strProcessor.add("hello");
strProcessor.add("again");
strProcessor.add("hello");

strProcessor.print();
strProcessor.remove("again");
strProcessor.print();