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
    const clientKey = req.headers["x-api-key"]
    const validKey = process.env.SERVICE_KEY;
    
    //Request parameters
    // const zipcode = req.query.zip;
    // const date = req.query.date;

    //destructured query
    const { zipcode, date } = req.query

    //Guard clause - Must have a zipcode
    if(!zipcode){
        return res.status(400).json({
            error: "zipcode is required"
        })
    }

    if(!date){
        return res.status(400).json({
            error: "date is required"
        })
    }

    console.log(`Fetching weather for Zip Code: ${zipcode} on Date: ${date}`)

    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${zipcode}/${date}/?key=${apiKey}`
    
    const response = await fetch(url)
    const result = await response.json();

    res.json({
        day : result.days[0].datetime,
        zipcode: zipcode,
        high_temp: result.days[0].tempmax
    })

    console.log(`Received key: ${clientKey ? 'present' : 'missing'}`);

});

app.listen(PORT, () => {
    console.log(`Weather Microservice running on port ${PORT}`)
})