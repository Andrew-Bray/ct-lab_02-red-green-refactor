const request = require('superagent');

const fetchQuotes = async() => {
    const { body } = await request.get('http://futuramaapi.herokuapp.com/api/quotes/1');
    console.log(body);
    const results = body[0];
return {
    'name': results.character,
    'text': results.quote,
    'image': results.image
};
};

module.exports = { fetchQuotes };