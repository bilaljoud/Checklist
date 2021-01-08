// this is the main server program
import express from 'express';
const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(PORT, () => {
    console.log(`Lisenting at http://localhost:${PORT}`);
});

