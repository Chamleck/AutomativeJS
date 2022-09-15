console.log('запрос данных серверу');

setTimeout(()=>{
    console.log('Подготовка ответа сервера....')
    const product = {
        name: 'laptop',
        price: 1000
    }
    setTimeout(()=>{
        product.status = 'inStock'
        console.log(product);
    }, 2000)
} , 3000)

const req = new Promise((resolve,reject)=>{
    setTimeout(()=>{
    console.log('Подготовка ответа сервера....')
    const product = {
        name: 'laptop',
        price: 1000
    }
    setTimeout(()=>{
        product.status = 'inStock'
        console.log(product);
    }, 2000)
} , 3000)
})

console.log('запрос данных серверу');
const req3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
    console.log('Подготовка ответа сервера....')
    const product = {
        name: 'laptop',
        price: 1000
    }
    resolve()

} , 3000)
})

req3.then(() => {
    console.log ('Данные получены')
})


console.log('запрос данных серверу');
const req2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
    console.log('Подготовка ответа сервера....')
    const product = {
        name: 'laptop',
        price: 1000
    }
    resolve()

} , 3000)
})

req2.then((product) => {
    setTimeout(()=>{
        product.status = 'inStock'
        console.log(product);
    }, 2000)
})




console.log('запрос данных серверу');
const req1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
    console.log('Подготовка ответа сервера....')
    const product = {
        name: 'laptop',
        price: 1000
    }
    resolve(product)

} , 3000)

})

req1.then((product) => {
    const req4 = new Promise(resolve, reject) => {
        setTimeout(() => {
        product.status = 'inStock'
        resolve(product)

    }, 2000)

    })
