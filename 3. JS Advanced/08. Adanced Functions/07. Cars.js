function solve() {
    let objects = {};

    function create(name, inherits, parent) {
        if (inherits) {
            objects[name] = Object.create(objects[parent]);
        } else {
            objects[name] = {};
        }
    }

    function set(name, key, value) {
        objects[name][key] = value;
    }

    function print(name) {
        let result = [];
        for (let prop in objects[name]) {
            result.push(`${prop}:${objects[name][prop]}`);
        }
        console.log(result.join(','));
    }

    return { create, set, print };
}

let commands = solve();
commands.create('c1');
commands.create('c2', 'inherit', 'c1');
commands.set('c1', 'color', 'red');
commands.set('c2', 'model', 'new');
commands.print('c1');
commands.print('c2');
