const methods = iface => {
    const result = [];
    for (const name in iface) {
        const fn = iface[name];
        if (typeof fn === 'function') {
            result.push([name, name.length])
        }
    }
    return result
}


const exampleIface = {
    m1: x => [x],
    m2: function (x, y) {
        return [x, y];
    },
    m3(x, y, z) {
        return [x, y, z];
    }
}

const funcResult = methods(exampleIface)
console.log(funcResult)