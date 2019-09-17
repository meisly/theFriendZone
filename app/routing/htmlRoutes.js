const path = require("path");

module.exports = function (app) {

    //Routes
    // =============================================================
    
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"))
    });

    app.get("/:address", function (req, res) {
        let site = req.params.address;

        //checks address param and routes to either survey or home
        if (site === "survey") {
            res.sendFile(path.join(__dirname, "../public/survey.html"));
        } else {
            res.sendFile(path.join(__dirname, "../public/home.html"));
        }
    });
}