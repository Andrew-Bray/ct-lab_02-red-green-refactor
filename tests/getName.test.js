const { getName } = require('../scripts/getName.js');

describe('getName', () => {
    it('returns the spot from the object `spot`', () => {
        const spot = { name: 'spot', age: 5, weight: '20 lbs' }
        expect(getName(spot))
            .toEqual('spot')
    });

    it('returns `Aang` from the character object', () => {
        const character = { _id: '5cf5679a915ecad153ab68c9', name: 'Aang' };
        expect(getName(character))
            .toEqual('Aang')
    });
});