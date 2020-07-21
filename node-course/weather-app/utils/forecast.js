const request = require('request');

const forecast = (address, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=ab5759dabeaed17c54319d794feee0e6&query=${encodeURIComponent(address)}`;

    request({
        url,
        json: true
    }, (error, response) => {
        if (error)
            callback('Unable to connect API', undefined);
        else if (response.body.error)
            callback(response.body.error, undefined);
        else
            callback(undefined, `${response.body.current.weather_descriptions}. Temprature is ${response.body.current.temperature}. There is ${response.body.current.precip} percent chance of rain`);
    });
}

module.exports = forecast;