const { fetchQuotes } = require('../scripts/fetchQuotes.js');
const request = require('superagent');

jest.mock('superagent');

describe('fetchQuotes', () => {
    it('use the Futurama Quote API to return a single quote', async() => {
        request.get.mockResolvedValue({
            body: [{
                character: 'Bender',
                quote: "Now we're slaving!",
                image: 'https://res.cloudinary.com/dzxqhkyqd/image/fetch/c_scale,w_500/https://res.cloudinary.com/dzxqhkyqd/image/upload/v1552429540/bender.png'  
            }]   
        });
        const quote = await fetchQuotes();
        expect(quote)
            .toEqual({
                name: 'Bender',
                text: "Now we're slaving!",
                image: 'https://res.cloudinary.com/dzxqhkyqd/image/fetch/c_scale,w_500/https://res.cloudinary.com/dzxqhkyqd/image/upload/v1552429540/bender.png'
            })
    })
})