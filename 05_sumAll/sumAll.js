const sumAll = function(...args) {
    args.sort()
    let firstNumber = args[0];
    let lastNumber = args[1]
    console.log(typeof(firstNumber))
    if( !Number.isInteger(firstNumber) || firstNumber < 0 || !Number.isInteger(lastNumber) || lastNumber < 0){
        return "ERROR"
    }

    let sum = 0;
    
    
    for(let counter = firstNumber; counter <= lastNumber; counter++){
        sum+=counter;
    }


    return sum;
};

// Do not edit below this line
module.exports = sumAll;

