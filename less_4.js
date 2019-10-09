function sum (){
    "use strict"
    var sum = 0;
    for(var i = 0; i < arguments.length; i++){
        sum += arguments[i];
    }
    return sum;
}

console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, 4));


function sum_2 ( ... d){
    var sum = 0;
    for(var i = 0; i < d.length; i++){
        sum += d[i];
    }
    return sum;
}

console.log(sum_2(1, 2, 3));
console.log(sum_2(1, 2, 3, 4));