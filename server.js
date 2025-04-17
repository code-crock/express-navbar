// server.js

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const path = require("path");

app.use(express.static(path.join(__dirname, 'public')));

//root
app.get('/', (req, res) => {
    // your nav bar is on index.html
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

// Route for Climate Crisis
app.get("/climate-crisis", (req, res) => {
    res.redirect("https://github.com/Easy4me/climate-crisis")
});

// Route for Typesetting
app.get("/typesetting", (req, res) => {
    res.redirect("https://github.com/code-crock/typsetting")
});

// Route for Four Algorithms
app.get("/four-algorithms", (req, res) => {
    res.redirect("https://github.com/code-crock/four-sorting-algo-phase-1/blob/main/styles.css");
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});