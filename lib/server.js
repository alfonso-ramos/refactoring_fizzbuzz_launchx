
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

app.listen(port, () =>{
    console.log(`Fizzbuzz API in localhost: ${port}`);
});

