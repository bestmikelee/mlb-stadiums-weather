export function forecastUrl(lat: string, long: string, apiKey: string) {
    return `http://api.wunderground.com/api/${apiKey}/forecast/q/${lat},${long}.json`;
}
