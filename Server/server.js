import express from 'express';
import dbops from './database-stuff.js'

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get('/', (req, res) => {
    // res.header('Access-Control-Allow-Origin', '*');

    res.json('Hello World');
    
});

app.post('/', (req, res) => {
    const task = req.body;

    await dbops(task, 'create')
    // console.log(task);
    // res.send('Hello');
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}...`));