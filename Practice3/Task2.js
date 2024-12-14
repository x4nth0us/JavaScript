function getdata(callback){
    
    setTimeout(() => {
        callback('hello')

    }, 1000);
}

function handledata(data){
    console.log(data)
}

getdata(handledata);

function promise(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let x = Math.random()
            if (x >= 0.5) resolve('good');
            else reject('bad')
        }, 1000); 
    });
}

promise()
    .then((k) => {
        console.log("yeah", k);
    })
    .catch((l) => {
        console.log("nah", l);
    })

function async_await() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let x = Math.random()
            if (x >= 0.5) resolve('good');
            else reject('bad')
        }, 1000); 
    });
}

async function asyncgetdata() {
    try {
        console.log(await async_await());
      } catch (error) {
        console.log(error);
      }
}

asyncgetdata();

function asyncfunction(x) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(x)  
        }, 1000); 
    });
}

async function parallel(params) {
    try {
        const promises = [asyncfunction(1), asyncfunction(2), asyncfunction(3)];
        console.log(await Promise.all(promises));
    } catch (error) {
        console.log(error);
    }
}

parallel();