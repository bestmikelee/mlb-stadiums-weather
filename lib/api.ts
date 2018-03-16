var promisify = require('util').promisify;
var request = require('request');
import * as resource from './resource';
var stadiums = require('./stadiums.json');

const getAsync = promisify(request.get);

interface weatherInterface {
    apiKey: string;
    getForecast(team: string): object;
}
export default class weatherAPI implements weatherInterface {
    apiKey: string;
    constructor(apiKey: string) {
        this.apiKey = apiKey;
    }
    async getForecast(team: string) {
        const apiUrl = resource.forecastUrl(
            stadiums[team].lat,
            stadiums[team].long,
            this.apiKey
        );
        try {
            const response = await getAsync(apiUrl);
            const data = JSON.parse(response.body);
            return data;
        } catch (e) {
            throw e;
        }
    }
}
