function sortMap(map, sortFn) {

    if (arguments.length === 1) {
        sortFn = (a, b) => a[0].toString().localeCompare(b[0].toString());
    }

    let newMap = new Map;

    [...map.entries()].sort(sortFn).forEach((e => newMap.set(e[0], e[1])));

    return newMap;
}

module.exports = sortMap;