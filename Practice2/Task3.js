let arr = [1, "snow", true, 15, null];

console.log(arr[0]);
console.log(arr[4]);

arr[1] = "sun";

let arr2 = arr;

console.log(arr);
console.log(arr2);

function merge(arr, arr2){
    return([...arr, ...arr2])
}

console.log(merge(arr, arr2))

let usersarr = [
    {name: 'John'},
    {name: 'Alice'},
    {name: 'Mike'},
]

function names(usersarr){
    let names = [];
    for (let i = 0; i < usersarr.length; i++) names.push(usersarr[i].name);

    return names;
}

console.log(names(usersarr))

function avg(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++) sum += arr[i];
    
    return(sum/arr.length)
}

numarr = [10, 15, 20, 25, 30]

console.log(avg(numarr))