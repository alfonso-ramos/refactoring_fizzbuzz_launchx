const ExplorersService = require("../../lib/services/ExplorersService");

describe("Test de explorer para service", () =>{
    test("Requerimiento 1: Calcular los explorers en mision", () =>{
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorersService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });
});