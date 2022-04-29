
const ExplorerController = require("../lib/controllers/ExplorerControllers");

const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (req,res) => {
    res.json({message: "FizzBuzz Api Welcome!"});
});

app.get("/v1/explorers/:mission", (request, response) =>{
    const mission = request.params.mission;
    const explorersInMission = ExplorerController.getExplorerByMission(mission);
    response.json(explorersInMission);
});

app.get("/v1/explorers/amount/:mission", (req, res) =>{
    const mission = req.params.mission;
    const amountOfExplorers = ExplorerController.getExplorersAmountByMission(mission);
    res.json(amountOfExplorers);
});

app.listen(port, () =>{
    console.log(`Fizzbuzz API in localhost: ${port}`);
});

