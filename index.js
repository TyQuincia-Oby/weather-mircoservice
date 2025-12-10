import express from 'express';
import 'dotenv/config'

const apiKey = process.env.WEATHER_KEY;

const app = express();
const PORT = process.env.PORT //run on different port than REST API

app.get('/', (req, res) => {
    res.json({
       message: 'Hello from home route'
    })

    console.log(req.headers)
});

//stub route
app.get('/weather/stub', (req, res) => {
    res.json({
        zipcode : 70815,
        date: "12-08-2025",
        tempHigh: 85,
        tempLow: 67,
        conditions: "warm and sunny",
        precipitationProb: "0%"
    })
});

//Weather route
app.get('/weather', async (req, res) => {

    const zipcode = req.query.zip;
    const date = req.query.date;

    console.log(`Fetching weather for Zip Code: ${zipcode} on Date: ${date}`)

    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Baton%20Rouge%2C%20L?unitGroup=us&key=G5SHYPPY7NPSNVT2UHMR8U6WZ&contentType=json`
    
    const response = await fetch(`${url}`)
    const result = await response.json();

    console.log(result);


    res.json({
        result
    })
});

app.listen(PORT, () => {
    console.log(`Weather Microservice running on port ${PORT}`)
})