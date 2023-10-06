//  Creo un loop con con For che stampi i numeri da 1 a 100 nella console

for (let i = 0; i < 100; i++) {
  let n = i + 1;

  // 15
  const restoDiv3 = n % 3; // 0
  const restoDiv5 = n % 5; // 0

  if (restoDiv3 === 0 && restoDiv5 === 0) { // SI && SI
    console.log(n, "FizzBuzz");
  } else if (restoDiv3 === 0) {
    // (0 === 0) SI
    console.log(n, "Fizz");
  } else if (restoDiv5 === 0) {
    // (0 === 0)
    console.log(n, "Buzz");
  }
}
