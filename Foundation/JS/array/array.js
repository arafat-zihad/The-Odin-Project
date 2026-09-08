const marks = [78, 95, 65, 98];
// console.log(marks[marks.length - 1]);
// console.log(marks.at(-2));

const fruits = ["Aam", "Jam", "Katol", "Lechu", "Kola"];
// console.log(fruits.at(0));
// console.log("Second one is " +  fruits.at(33))
// console.log(`Third one is ${fruits.at(2)}`)
// console.log("total fruits " + fruits.length)

const mixed = ["Sylhet", 43, true, null];

// console.log(typeof mixed);
// console.log(Array.isArray(mixed));
// console.log(Array.isArray("test"));

const list = [1, 2, 3];
list.push(4);
list[0] = 99;
// console.log(list)

const queue = ["Kattush", "Mokhai"];
queue.push("Betala");
// console.log(queue);

queue.pop();
// console.log(queue);

queue.unshift("Haramzada");
// console.log(queue)

queue.shift();
// console.log(queue)

// splice
// Face - 1: Delete
const a = ["Jan", "Feb", "Bad", "Mar"];
const removed = a.splice(2, 1);
console.log(a);
console.log(removed);

// Face - 2: Insert
a.splice(1, 0, "New");
console.log(a);

// Face - 3: Replace
a.splice(1, 1, "X", "Y")
console.log(a)

