const { expect } = require("expect");
const ExplorerController = require("../../lib/controllers/ExplorerControllers");

describe("Test de Explorers Controllers", ()=>{
    test("Requerimiento 1: Test para el metodo getExplorersByMission", ()=>{
        const explorersInMission = ExplorerController.getExplorerByMission("node");
        expect(explorersInMission).not.toBeUndefined();
    });
    test("Requerimiento 2: Test para el metodo getExplorersUsernameByMission", () => {
        const explorersUsernameInMission = ExplorerController.getExplorersUsernameByMission("node");
        expect(explorersUsernameInMission).not.toBeUndefined();
    });
    test("Requerimiento 3: Test para el metodo getExplorersAmountByMission", () => {
        const amountOfExplorersByMission = ExplorerController.getExplorersAmountByMission("node");
        expect(amountOfExplorersByMission).toBe(10);
    });
});