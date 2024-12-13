let collection = new Map();
collection.set('key1', 'value1')
collection.set('key2', 'value2')
collection.set('key3', 'value3')

console.log(collection.get('key3'))

collection.delete('key2');

if (collection.has('key2')) console.log('yeah');
else console.log('nah');