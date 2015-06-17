'use strict';
function App(){

    var self = this;

    self.concatArrays = function(a, b){
        if(!a || !a.length){
            return [];
        }

        return a.reduce(self.reduceCallbackWrapper(b), []);
    };

    self.reduceCallbackWrapper = function(arrayToDistribute){
        self.reduceCallback = function(previousValue, currentValue){
            var valueToPass = self.concatCallback(currentValue, arrayToDistribute);
            return previousValue.concat(valueToPass);
        };
        return self.reduceCallback;
    };

    self.concatCallback = function(currentValue, secondArray){
        return secondArray.map(function(currentValueOfSecondArray) {
            return currentValue + currentValueOfSecondArray;
        });
    };

}