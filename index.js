const express = require('express');
const app = express();

var counter = 0;

app.get('/', (req, res) => {
    counter++;
    res.send({ yo: "this page has not been visited " + counter + " times" });
});

const PORT = process.env.PORT || 5000;
console.log("port is " + PORT);
app.listen(PORT);