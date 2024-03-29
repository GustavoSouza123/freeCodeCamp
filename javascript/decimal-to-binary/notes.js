/* decimal to binary functions */


// first

const decimalToBinary1 = (input) => {
    const inputs = [];
    const quotients = [];
    const remainders = [];

    if (input === 0) {
        result.innerText = "0";
        return;
    }

    while (input > 0) {
        const quotient = Math.floor(input / 2);
        const remainder = input % 2;

        inputs.push(input);
        quotients.push(quotient);
        remainders.push(remainder);
        input = quotient;
    }

    console.log("Inputs: ", inputs);
    console.log("Quotients: ", quotients);
    console.log("Remainders: ", remainders);

    result.innerText = remainders.reverse().join("");
}


// second

const decimalToBinary2 = (input) => {
    let binary = '';

    if(input === 0) {
        binary = '0';
    }

    while(input > 0) {
        binary = (input % 2) + binary;
        input = Math.floor(input / 2);
    }

    result.innerText = binary;
}


// call stack example

const callStack = [];

const a = () => {
  return "freeCodeCamp " + b();
};

const b = () => {
  return "is " + c();
};

const c = () => {
  return "awesome!";
};

console.log(a());


// recursive function

const countDownAndUp = (number) => {
    console.log(number);

    if(number === 0) {
        console.log('Reached base case');
        return;
    } else {
        countDownAndUp(number - 1);
        console.log('Number', number);
    }
}

countDownAndUp(3);