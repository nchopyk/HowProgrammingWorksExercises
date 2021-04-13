function hoist() {
    a = 20;
    var b = 100;
}

hoist();

console.log(a);
/*
Accessible as a global variable outside hoist() function
Output: 20
*/

try {
    console.log(b);
} catch (e) {
    console.log("ERROR while printing variable b")
    console.log("Since it was declared, it is confined to the hoist() function scope.\n" +
        "We can't print it out outside the confines of the hoist() function.\n" +
        "Output: ReferenceError: b is not defined")
}
