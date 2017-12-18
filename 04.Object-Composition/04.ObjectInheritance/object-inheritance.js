let objects = new Map();

function create(name) {
    objects.set(name, {});
}

function inherit(name, parent) {
    objects.set(name, Object.create(objects.get(parent)));
}

function set(objName, propName, value) {

    objects.get(objName)[propName] = value;
}

function print(name) {
    let current = objects.get(name);
    let props = [];
    for (let prop in current) {
        props.push(`${prop}:${current[prop]}`);
    }
    console.log(props.join(','));
}

create('c1');
inherit('c2', 'c1');
set('c1', 'color', 'red');
set('c2', 'model', 'new');

print('c1');
print('c2');