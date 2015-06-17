describe('app', function(){

    var app;

    beforeEach(function(){
        app = new App();
    });

    describe('concatArrays', function(){
        var a, b;

        beforeEach(function(){
            a = [1, 2];
            b = ['a', 'b'];
        });

        it('should return an empty array if the first arg is not defined', function(){
            a = undefined;
            var actual = app.concatArrays(a, b);
            expect(actual).toEqual([]);
        });

        it('should return an array', function(){
            var expectedResult = ['1a', '1b', '2a', '2b'];
            var actual = app.concatArrays(a, b);
            expect(actual).toEqual(expectedResult);
        });

        it('should call reduce on the first argument', function(){
            spyOn(a, 'reduce');
            spyOn(app, 'reduceCallbackWrapper').and.returnValue('thing');
            app.concatArrays(a, b);
            expect(a.reduce).toHaveBeenCalledWith('thing', []);
        });

    });

    describe('reduceCallbackWrapper', function(){

        it('should return a function', function(){
            var arrayToDistribute = ['a', 'b'];
            var actual = app.reduceCallbackWrapper(arrayToDistribute);
            expect(typeof actual).toBe('function');
        });

    });

    describe('reduceCallback', function(){
        var b, reduceCallback;

        beforeEach(function(){
            b = ['a', 'b'];
            reduceCallback = app.reduceCallbackWrapper(b);
        });

        it('should call concatCallback with current value and second array', function(){
            spyOn(app, 'concatCallback');
            reduceCallback([], 2);
            expect(app.concatCallback).toHaveBeenCalledWith(2, ['a', 'b']);
        });

        it('should return an an array with the second argument prepended to each of the values in the second array', function(){
            var expectedResult = ['2a', '2b'];
            var actual = reduceCallback([], 2);
            expect(actual).toEqual(expectedResult);
        });

    });

    describe('concatCallback', function(){

        it('should return an array of the first arg distributed to each value in the second array', function(){
            var expectedResult = ['1a', '1b'],
                secondArray = ['a', 'b'];
            var actual = app.concatCallback(1, secondArray);
            expect(actual).toEqual(expectedResult);
        });


    });

});