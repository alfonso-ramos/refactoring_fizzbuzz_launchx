const Reader = require("../utils/Reader");
const ExplorerService = require("../services/ExplorersService");
//const FizzbuzzService = require("../services/FizzbuzzService");

class ExplorerController{
    static getExplorerByMission(mission){
        const explorer = Reader.readJsonFile("./data/explorers.json");
        const explorersInMission = ExplorerService.filterByMission(explorer, mission);
        return explorersInMission;
    }
    static getExplorersUsernameByMission(mission){
        const explorer = Reader.readJsonFile("./data/explorers.json");
        const explorersUsernamesInMission = explorer.filter((explorer) => explorer.mission == mission);
        const usernames = explorersUsernamesInMission.map((explorer) => explorer.githubUsername);
        return usernames;
    }
    static getExplorersAmountByMission(mission){
        const explorer = Reader.readJsonFile("./data/explorers.json");
        const explorersInMission = explorer.filter((explorer) => explorer.mission == mission);
        return explorersInMission.length;
    }
}

module.exports = ExplorerController;