// Dependencies
// =============================================================
const express = require("express");

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3000;
//Set up so css works
app.use(express.static('app/public'))
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
app.use(express.json({ limit: '10mb'}));

//Routes
// =============================================================
require('./app/routing/htmlRoutes.js')(app);

require('./app/routing/apiRoutes')(app);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
