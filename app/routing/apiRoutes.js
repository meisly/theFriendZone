
module.exports = function (app) {
    // User Data (DATA)
    // =============================================================
    let users = [{
        "name": "Ahmed",
        "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        "scores": [
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
        ]
    },]

    //Routes
    // =============================================================


    // Displays all users
    app.get("/api/friends", function (req, res) {
        return res.json(users);
    });


    // Handles incoming surveys and returns most compatible friend
    app.post("/api/friends", function (req, res) {
        console.log("tadah");
        // req.body hosts is equal to the JSON post sent from the user
        // This works because of our body parsing middleware
        let newUser = req.body;
        
        let diff = [];

        for (let i = 0; i < users.length; i++) {
            let comparison = users[i].scores;
            let score = compare(newUser.scores, comparison);
            diff.push(score);
        }

        let friendex = returnIndexofMin(diff);
        let friend = users[friendex];

        res.json(friend);
        users.push(newUser)
    });

    function returnIndexofMin (array) {
        let min = 10000;
        for (let i = 0; i < array.length; i++){
            if (array[i] < min) {
                min = array[i];
            }
        }
        return array.indexOf(min);
    }

    function compare(array1, array2){
        let score = 0;
        if (array1.length == array2.length) {
            for (let j = 0; j < array1.length; j++){
                score += Math.abs(array1[j]-array2[j])
            }
            return score;
        } else {
            throw "Oopsies, something has gone real wrong"
        }
    }
}