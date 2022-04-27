const Reader = require("./lib/utils/Reader")
const ExplorerService = require("./lib/services/ExplorersService")
const { filterByMission, getAmountOfExplorersByMission, getExplorersUsernameByMission } = require("./lib/services/ExplorersService")

const explorers = Reader.readJsonFile("explorers.json")

//Pruebas con node para los metodos de las clases
//const explorersInNode = filterByMission(explorers, "node")
//const explorersInNode = getAmountOfExplorersByMission(explorers, "node")
const explorersInNode = getExplorersUsernameByMission(explorers, "node")
//console.log(explorers)
console.log(explorersInNode)
