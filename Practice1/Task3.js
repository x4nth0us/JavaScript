let a = 10;
let b = 25;
let c = 15;

let max;

if (a > b && a > c){
    max = a;
} else if (b > a && b > c){
    max = b;
} else max = c;

console.log(max);
