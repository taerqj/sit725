var express = require("express");
const path = require('path');

var app = express();
var port = process.env.PORT || 3003;

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// GET endpoint to calculate the square of a number
// Example: http://localhost:3003/square?num=5
app.get('/square', (req, res) => {
    const num = parseFloat(req.query.num);

    if (isNaN(num)) {
        return res.send("Error: Please provide a valid number using query parameter 'num'.");
    }

    const square = num * num;
    res.send(`The square of ${num} is: ${square}`);
});

// GET endpoint to add two numbers
// Example: http://localhost:3003/add?a=5&b=3
app.get('/add', (req, res) => {
    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);

    if (isNaN(a) || isNaN(b)) {
        return res.send("Error: Please provide valid numbers for a and b.");
    }

    const sum = a + b;
    res.send(`The sum of ${a} and ${b} is: ${sum}`);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});