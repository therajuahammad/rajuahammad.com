const express = require('express');

// Data Import
const socialIcons = require('./data/social-icon.json');
const welcome = require('./data/welcome.json');
const about = require('./data/about.json');
const services = require('./data/services.json');
const portfolio = require('./data/portfolio.json');

const app = express();

app.use('/pub', express.static('public'));

app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index', {
    title: "Raju Ahammad",
    designation: "Web Developer",
    icons: socialIcons,
    welcome: welcome,
    about: about,
    services: services.services,
    portfolios: portfolio.portfolios
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Express running → PORT ${PORT}`);
});