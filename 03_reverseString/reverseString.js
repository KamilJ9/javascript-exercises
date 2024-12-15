const reverseString = function(word) {
    let newString = "";
    for (let i = word.length; i>0;i--){
        newString+=word[i-1]
    }

    return newString;
};

// Do not edit below this line
module.exports = reverseString;
