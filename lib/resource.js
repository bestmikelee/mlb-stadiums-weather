"use strict";
exports.__esModule = true;
function forecastUrl(lat, long, apiKey) {
    return "http://api.wunderground.com/api/" + apiKey + "/forecast/q/" + lat + "," + long + ".json";
}
exports.forecastUrl = forecastUrl;
