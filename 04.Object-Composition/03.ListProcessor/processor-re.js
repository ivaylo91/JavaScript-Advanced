let commandProcessor = (function () {

    let list = [];

    return {
        add: (newItem) => list.push(newItem),
        remove: (item) => list = list.filter(x => x !== item),
        print: () => console.log(list)
    }
})();

commandProcessor.add('hello');
commandProcessor.add('again');
commandProcessor.add('again');
commandProcessor.remove('again');
commandProcessor.add('hello');
commandProcessor.print();