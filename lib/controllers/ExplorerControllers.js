const Reader = require("../utils/Reader");
const ExplorerService = require("../services/ExplorersService");
//const FizzbuzzService = require("../services/FizzbuzzService");

class ExplorerController{
    static getExplorerByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        const explorersInMission = ExplorerService.filterByMission(explorers, mission);
        return explorersInMission;
    }
    static getExplorersUsernameByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        const explorersUsernamesInMission = explorers.filter((explorer) => explorer.mission == mission);
        const usernames = explorersUsernamesInMission.map((explorer) => explorer.githubUsername);
        return usernames;
    }
    static getExplorersAmountByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        const explorersInMission = explorers.filter((explorer) => explorer.mission == mission);
        return "Explorers en la misión " + mission+ ": " + explorersInMission.length;
    }
}

module.exports = ExplorerController;

//console.log(ExplorerController.getExplorerByMission("node"));
//console.log(ExplorerController.getExplorersUsernameByMission("node"));
//console.log(ExplorerController.getExplorersAmountByMission("node"));