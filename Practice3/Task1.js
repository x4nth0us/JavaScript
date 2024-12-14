class MyError extends Error{
    constructor(message) {
        super(message)
        this.name = 'MyError';
    }
}

function operation(a, b, c){
    try {
        if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
            throw new MyError("args are not numbers");
        }

        return(a + b + c)

    } catch(error){
        console.log(error.name + ' - ' + error.message);
    }
}

console.log(operation(1, 2, 3))
console.log(operation(1, "2", 3))