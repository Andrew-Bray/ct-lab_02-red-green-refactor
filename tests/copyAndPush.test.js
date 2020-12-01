const { copyAndPush } = require('../scripts/copyAndPush.js');

describe('copyAndPush', () => {
    it('will return a new array with all the items in the original array and a new item pushed to the end', () => {
        const numbers = [1, 2, 3];
        newArray = copyAndPush(numbers, 4);
        expect(newArray)
            .toEqual([1, 2, 3, 4]);
        expect(numbers)
            .toEqual([1, 2, 3]);

    });
});