const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const PORT = 3000;

// Import routes
const homeRoutes = require('./routes/HomeRoutes');

app.set('view engine', 'ejs');

app.use(expressLayouts);

app.use(express.static('public'))

// Use routes
app.use('/', homeRoutes);


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
