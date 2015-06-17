'use strict';

function AppWithRecursion(){

    var self = this;

    self.joinArrays = function(a, b, iterator, newArray){
        if(!a || !a.length){
            if(!b || !b.length){
                return [];
            }
            return b;
        }
        else if(!b || !b.length){
            return a;
        }

        if(!newArray){
            newArray = [];
        }
        if(!iterator){
            iterator = 0;
        }

        b.map(function(currentValueOfb){
            newArray.push(a[iterator] + currentValueOfb);
        });


        iterator++;
        if(iterator < a.length){
            self.joinArrays(a, b, iterator, newArray);
        }

        return newArray;
    };

}