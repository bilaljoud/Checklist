import express from 'express';

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    // res.header('Access-Control-Allow-Origin', '*');
    res.json('Hello World');
    
});

app.post('/', (req, res) => {
    // if (!req.body)
    // res.header('Access-Control-Allow-Origin', '*');

    console.log(hello)
    res.send('Hello')
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}...`));