const express = require('express');

const app = express();

//localhost:3000/location?location=blah
app.get('/location', (request, response) => {
    try{
        const geoData = require('./data/geo.json');
        const location = new Location(request.query.location, geoData);
        response.send(location);
    } catch(error){
        response.status(500).send('Sorry something went wrong.')
    }

});

function Location(query, geoData){
    this.search_query = query;
    this.formatted_query = geoData.results[0].formatted_address;
    this.latitude = geoData.results[0].geometry.location.lat;
    this.longitude = geoData.results[0].geometry.location.lng;
}

app.get('/weather', (request, response) => {

});

app.listen(3000, () => {
    console.log('server is listening');
});