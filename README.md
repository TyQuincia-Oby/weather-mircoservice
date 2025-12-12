# Weather Microservice
A microservice that provides the weather forecast from [Visual Crossing Weather API](https://www.visualcrossing.com/) based on user input of zipcode and date.

## Getting Started
1. Clone Repository 
    Run: 
    `git clone git@github.com:TyQuincia-Oby/weather-mircoservice.git`

2. Run: `npm install`

3. Create a `.env` file and add API Keys
`WEATHER_KEY = "{ADD KEY HERE}"
SERVICE_KEY = "{ADD KEY HERE}"
PORT = 3001`
* Weather key is from Visual Crossing Weather API and Service Key is your created key
** Port should not be the REST API port

4. Run: `node index.js`

## Route Path and HTTP Method

> GET /weather - will return the forecast for the chosen location and date

### Required Headers
| Key | Description
| ----------- | ----------- |
| x-api-key | Your created api key |

## Required Inputs 
| Param | Description
| ----------- | ----------- |
| zipcode | 5 digit US zipccode |
| date | Date in format: YYYY-MM-DD |
## Example Request URL
> GET http://localhost:3001/weather?zipcode=70815&date=2025-12-11

## Sample response JSON
```json
{
    "day": "2025-12-11",
    "zipcode": "70815",
    "high_temp": 63,
    "low_temp": 38,
    "description": "Clear conditions throughout the day."
}
```

## Possible error codes
`400` Missing parameter ie zipcode or date
`401` Unauthorized (missing or incorrect key)

### Check
    ✅ Route documented
    ✅ Inputs and outputs described
    ✅ Example requests included
    ✅ Error codes included

## Assignee 
*TyQuincia R. Oby*
![me](me.png)
