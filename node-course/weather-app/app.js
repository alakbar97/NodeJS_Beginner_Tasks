const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

geocode('Istanbul', (error, data) => {
    console.log('Error', error);
    console.log('Data', data);
});

forecast('Moscowrequests', (error, data) => {
    console.log('Error', error);
    console.log('Data', data);
});