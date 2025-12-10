import express from 'express';

const app = express();
const PORT = 3001 //run on different port than REST API

app.get('/', (req, res) => {
    res.json({
       message: 'Hello from home route'
    })

    console.log(req.headers)
});

//fetch Baton Rouge,LA Weather
app.get('/')

app.listen(PORT, () => {
    console.log(`Weather Microservice running on port ${PORT}`)
})