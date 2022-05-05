class ExplorerService{
    static filterByMission(explorers, mission){
        const explorersInMission = explorers.filter((explorer) => explorer.mission == mission);
        return explorersInMission;
    }
    static getAmountOfExplorersByMission(explorers, mission){
        const explorersInMission = explorers.filter((explorer) => explorer.mission == mission);
        return explorersInMission.length;
    }
    static getExplorersUsernameByMission(explorers, mission){
        const explorersUsernamesInMission = explorers.filter((explorer) => explorer.mission == mission);
        const usernames = explorersUsernamesInMission.map((explorer) => explorer.githubUsername);
        return usernames;
    }
}

module.exports = ExplorerService;