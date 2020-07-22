const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

if (!process.argv[2])
    console.log('Provide city');
else {
    geocode(process.argv[2], (error, data) => {
        console.log('Error', error);
        console.log('Data', data);
    });

    forecast(process.argv[2], (error, data) => {
        console.log('Error', error);
        console.log('Data', data);
    });
}