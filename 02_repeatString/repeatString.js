const repeatString = function(argString, num) {
    if (num < 0){
        return 'ERROR';
    }

    let finalString = "";
    for (let i = 0;num>0;num--){
        finalString += argString;
    }
    return finalString;
};

// Do not edit below this line
module.exports = repeatString;
