const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();
const viewsPath = path.join(__dirname, '../templates/views');
const partialPath = path.join(__dirname, '../templates/partials');

hbs.registerPartials(partialPath);
app.set('view engine', 'hbs');
app.set('views', viewsPath);
app.use(express.static(path.join(__dirname, '../public')));

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Alakbar'
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Page',
        name: 'Alakbar'
    });
});

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Hello from help page',
        name: 'Alakbar'
    })
});

app.get('/weather', (req, res) => {
    res.render('weather', {
        title: 'This is weather page',
        name: 'Alakbar'
    });
});

app.get('/help/*', (req, res) => {
    res.render('404', {
        message: 'Help Article not found',
        title: 'Error page',
        name: 'Alakbar'
    });
});

app.get('*', (req, res) => {
    res.render('404', {
        message: '404 Error, oops',
        title: 'Error page',
        name: 'Alakbar'
    });
});

app.listen(3000, () => {
    console.log('Server is up');
});