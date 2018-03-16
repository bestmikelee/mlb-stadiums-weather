const weatherAPI = require('../lib/api.js').default;
const wunderground = require('../config/development').wunderground;

test('wunderground request is working', async () => {
    const wAPI = new weatherAPI(wunderground.apiKey);
    const response = await wAPI.getForecast('bal');
    expect(response).toHaveProperty('forecast');
});
