const removeFromArray = function(numberList,...args) {
    numbersToRemove = Array.prototype.slice.call(arguments, 1);
    numbersToRemove.forEach(element => {
        while(numberList.indexOf(element) != -1){
            numberList.splice(numberList.indexOf(element),1)
        }
    });

    return numberList;
};

// Do not edit below this line
module.exports = removeFromArray;

removeFromArray([1,2,2,3],2);
