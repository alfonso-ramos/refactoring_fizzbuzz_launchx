
const ExplorerController = require("../lib/controllers/ExplorerControllers");

const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (req,res) => {
    res.json({message: "FizzBuzz Api Welcome!"});
});

app.get("/v1/explorers/:mission", (req, res) =>{
    const mission = req.params.mission;
    const explorersInMission = ExplorerController.getExplorerByMission(mission);
    res.json(explorersInMission);
});

app.get("/v1/explorers/amount/:mission", (req, res) =>{
    const mission = req.params.mission;
    const amountOfExplorers = ExplorerController.getExplorersAmountByMission(mission);
    res.json({mission: req.params.mission, quantity: amountOfExplorers});
});

app.get("/v1/explorers/usernames/:mission", (req,res) =>{
    const mission = req.params.mission;
    const usernamesOfExplorers = ExplorerController.getExplorersUsernameByMission(mission);
    res.json(usernamesOfExplorers);
});

app.listen(port, () =>{
    console.log(`Fizzbuzz API in localhost: ${port}`);
});

