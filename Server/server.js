import express from 'express';
import dbops from './database-stuff.js'

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// get all tasks
app.get('/', (req, res) => {
    // res.header('Access-Control-Allow-Origin', '*');
    const task = req.body
    await dbops(task, 'get');
    res.json('Hello World');
    
});

// creating a task
app.post('/', (req, res) => {
    const task = req.body;

    await dbops(task, 'create');
    // console.log(task);
    // res.send('Hello');
});

// update a task
app.put('/', (req, res) => {
    const task = req.body;
    await dbops(task, 'update');
});

// delete a task
app.delete('/', (req, res) => {
    const task = req.body;
    await dbops(task, 'delete');
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}...`));