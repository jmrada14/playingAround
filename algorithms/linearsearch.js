let stuff = [10,34,56,67,93,120,137,168,259,280,311,342,413,514];

let random_value = stuff[ Math.floor( Math.random() * 14 ) ];

for (let i = 0; i < stuff.length; i++) {
    if (stuff[i] === random_value) {
        console.log(i + " : " + random_value);
    }
}
