let user = { name: "John", age: 19, city: "Moscow" };

console.log(user)

user.age = 18;
user.surname = "Pork";
delete user.city;

console.log(user)

let user2 = { name: "Alice", age: 21, city: "Saint Petersburg" };

console.log(user.age + user2.age)