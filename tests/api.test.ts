import weatherAPI from '../lib/api.ts';
import { wunderground } from '../config/development';

test('wunderground request is working', async () => {
    const wAPI = new weatherAPI(wunderground.apiKey);
    const response = await wAPI.getForecast('bal');
    expect(response).toHaveProperty('forecast');
});
