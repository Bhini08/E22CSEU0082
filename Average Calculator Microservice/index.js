const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json()); // Yeh sabse pehle hona chahiye

// Debugging middleware
app.use((req, res, next) => {
    console.log(`Request received: ${req.method} ${req.url}`);
    console.log('Request Body:', req.body);
    next();
});

app.post('/average', (req, res) => {
    const numbers = req.body.numbers;

    if (!Array.isArray(numbers) || numbers.length === 0) {
        return res.status(400).json({ error: 'Send non-empty number array' });
    }

    if (!numbers.every(num => typeof num === 'number')) {
        return res.status(400).json({ error: 'All elements of array should be numbers' });
    }

    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    const avg = sum / numbers.length;

    res.json({ average: avg });
});

app.listen(PORT, () => {
    console.log(`✅ Server running at http://localhost:${PORT}`);
});
