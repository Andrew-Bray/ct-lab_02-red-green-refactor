const { capitalizeAndFilter } = require('../scripts/capitalizeAndFilter.js')

describe('capitalizeAndFilter', () => {
    it('will takes an array of strings capitalize all strings and filter out any string that starts with the letter f', () => {
        const dogArray = ['spot', 'rover', 'bingo', 'fred'];
        let loudArray = capitalizeAndFilter(dogArray);
        expect(loudArray)
            .toEqual(['SPOT', 'ROVER', 'BINGO'])
    });
});