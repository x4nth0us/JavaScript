let names = new Set();
names.add('John')
names.add('ALice')
names.add('Paul')
names.add('Mike')

console.log(names.values().value)

let first = names.values().next().value;
names.delete(first)

if (names.has(first)) console.log('yeah');
else console.log('nah');

console.log(names.size);