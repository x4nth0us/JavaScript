class MyError extends Error{
    constructor(message) {
        super(message)
        this.name = 'MyError';
    }
}

function operation(a, b, c){
    try {
        if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
            throw new MyError("Все аргументы должны быть числами!");
        }

        return(a + b + c)

    } catch(error){
        console.error(error.name + ' - ' + error.message);
    }
}

console.log(operation(1, 2, 3))
console.log(operation(1, "2", 3))