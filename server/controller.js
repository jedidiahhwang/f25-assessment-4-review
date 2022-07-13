const nameArr = ["Andy", "Po", "Travis", "Emma", "Ben"];
// const database = require("./db.json");

// STEP 1: Create your functions inside of your module.exports
module.exports = {

    // DO NOT CHANGE THIS CODE; USE THIS CODE AS INSPIRATION
    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    postName: (req, res) => {
        // The chef is preparing your order
        console.log("ENDPOINT HIT");
        console.log(req.body);

        nameArr.push(req.body.name);

        // The chef is done cooking, he will plate it and send it back for you
        res.status(200).send(nameArr);
    },
    putName: (req, res) => {
        console.log("ENDPOINT HIT HIT HIT HIT");
        console.log(req.params);
        console.log(req.body);

        // Grab the index of the name we want to change
        const indexToEdit = +req.params.id; // Single + sign will change type to number
        
        // Let's use that index, and reassign it to our new name
        nameArr[indexToEdit] = req.body.newName;

        // Send back a response
        res.status(200).send(nameArr);
    },
    deleteName: (req, res) => {
        console.log("ENDPOINT HIT HIT HIT");
        console.log(req.params);

        const indexToDelete = +req.params.id; // This is the index of what we want to delete

        nameArr.splice(indexToDelete, 1);

        res.status(200).send(nameArr);
    }

}