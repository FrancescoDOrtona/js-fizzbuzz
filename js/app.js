//  Creo un loop con con For che stampi i numeri da 1 a 100 nella console

for(let i = 0; i < 100; i++) {
    let n = i + 1
    

    const restoDiv3 = n % 3
    const restoDiv5 = n % 5

    if (restoDiv3 === 0){
        console.log(n,'Fizz')
    } else if (restoDiv5 === 0){
        console.log(n,'Buzz')
    }
     if (restoDiv3 === 0 && restoDiv5 === 0) {
        console.log(n,'FizzBuzz')
    }


}