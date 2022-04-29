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
describe("Test para el metodo getFizzbuzz en ExplorerControllers", () =>{
    test("Requerimieto 1: Retornar el valor score", () =>{
        const number = {score: 1};
        expect(ExplorerController.getFizzbuzz(number)).toBe(1);
    });
    test("Requerimieto 2: Retornar el valor FIZZ", () =>{
        const number = {score: 3};
        expect(ExplorerController.getFizzbuzz(number)).toMatch(/FIZZ/);
    });
    test("Requerimieto 3: Retornar el valor BUZZ", () =>{
        const number = {score: 5};
        expect(ExplorerController.getFizzbuzz(number)).toMatch(/BUZZ/);
    });
    test("Requerimieto 4: Retornar el valor FIZZBUZZ", () =>{
        const number = {score: 15};
        expect(ExplorerController.getFizzbuzz(number)).toMatch(/FIZZBUZZ/);
    });
});