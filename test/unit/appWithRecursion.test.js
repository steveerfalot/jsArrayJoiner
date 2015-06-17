'use strict';

describe('AppWithRecursion', function(){
    var app;

    beforeEach(function(){
        app = new AppWithRecursion();
    });

    describe('joinArrays', function(){

        it('should return an empty array if first argument is undefined and the second argument is undefined', function(){
            var first, second;
            var expected = [];
            var actual = app.joinArrays(first, second);
            expect(actual).toEqual(expected);
        });

        it('should return an empty array if first and second array are empty', function(){
            var first = [], second = [];
            var expected = [];
            var actual = app.joinArrays(first, second);
            expect(actual).toEqual(expected);
        });

        it('should return the second array if first argument is undefined', function(){
            var first, second = ['a', 'b'];
            var actual = app.joinArrays(first, second);
            expect(actual).toEqual(second);
        });

        it('should return the first array if the second array is empty', function(){
            var first = [], second = [];
            var expected = [];
            var actual = app.joinArrays(first, second);
            expect(actual).toEqual(expected);
        });

        it('should return the first array if the second argument is undefined', function(){
            var first = [1, 2], second;
            var expected = [1, 2];
            var actual = app.joinArrays(first, second);
            expect(actual).toEqual(expected);
        });

        it('should return a joined array from two arrays', function(){
            var first = [1, 2], second = ['a', 'b'];
            var expected = ['1a', '1b', '2a', '2b'];
            var actual = app.joinArrays(first, second);
            expect(actual).toEqual(expected);
        });

        it('should call itself while the first array has another element', function(){
            var first = [1, 2], second = ['a', 'b'];
            var expected = ['1a', '1b', '2a', '2b'];
            spyOn(app, 'joinArrays').and.callThrough();
            app.joinArrays(first, second);
            expect(app.joinArrays.calls.count()).toEqual(2);
        });

    });
});