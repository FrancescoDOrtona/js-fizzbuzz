//  Creo un loop con con For che stampi i numeri da 1 a 100 nella console

for(let i = 0; i < 100; i++) {
    let n = i + 1
    

    const fizz = n % 3
    const buzz = n % 5

    if (fizz === 0){
        console.log(n,'Fizz', fizz)
    } else if (buzz === 0){
        console.log(n,'Buzz', buzz)
    }
     if (fizz === 0 && buzz === 0) {
        console.log(n,'FizzBuzz')
    }


}