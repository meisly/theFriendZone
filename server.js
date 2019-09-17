// Dependencies
// =============================================================
var express = require("express");


// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static('app/public'))
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routes
// =============================================================
require('./app/routing/htmlRoutes.js')(app);

require('./app/routing/apiRoutes')(app);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
