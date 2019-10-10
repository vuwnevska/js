'use strict';
var total_feints = 0;
function Ninja(){
    var feints = 0;

    this.make_feint = function(){
        feints++;
        total_feints++;
    }

    this.get_feint = function(){
        return feints;
    }
}

var ninja = new Ninja();

ninja.make_feint();
console.log('1 ', ninja.get_feint());
ninja.make_feint();
console.log('1 ', ninja.get_feint());
console.log('Total ', total_feints);

var ninja_2 = new Ninja();

ninja_2.make_feint();
console.log('2 ', ninja_2.get_feint());
console.log('Total ', total_feints);