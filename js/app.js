//  Creo un loop con con For che stampi i numeri da 1 a 100 nella console

const gridDOMElement = document.querySelector('.grid')

for (let i = 0; i < 100; i++) {
    let n = i + 1;

    const boxDOMElement = document.createElement('div');
    boxDOMElement.classList.add('box')

  if (n % 3 === 0 && n % 5 === 0) { 
    boxDOMElement.innerHTML = 'FizzBuzz'
    console.log(n, "FizzBuzz");

  } else if (n % 3 === 0) {
    boxDOMElement.innerHTML = 'Fizz'
    boxDOMElement.style.backgroundColor = '#1ABC9C'
    console.log(n, "Fizz");

  } else if (n % 5 === 0) { 
    boxDOMElement.innerHTML = 'Buzz'
    boxDOMElement.style.backgroundColor = '#3A546D'  
    console.log(n, "Buzz");

  } else {
    boxDOMElement.innerHTML = n
    boxDOMElement.style.backgroundColor = '#FF8F00'
    console.log(n)
  }
    gridDOMElement.append(boxDOMElement)
}
