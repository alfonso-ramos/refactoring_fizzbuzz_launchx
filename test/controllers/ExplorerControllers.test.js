const { expect } = require("expect");
const ExplorerController = require("../../lib/controllers/ExplorerControllers");

describe("Test de Explorers Controllers", ()=>{
    test("Requerimiento 1: Retornar todos los explorers que se encuentren an la mision node", ()=>{
        const explorersInMission = ExplorerController.getExplorerByMission("node");
        expect(explorersInMission).toEqual([
            {
                name: "Woopa1",
                githubUsername: "ajolonauta1",
                score: 1,
                mission: "node",
                stacks: [ "javascript", "reasonML", "elm" ]
            },
            {
                name: "Woopa2",
                githubUsername: "ajolonauta2",
                score: 2,
                mission: "node",
                stacks: [ "javascript", "groovy", "elm" ]
            },
            {
                name: "Woopa3",
                githubUsername: "ajolonauta3",
                score: 3,
                mission: "node",
                stacks: [ "elixir", "groovy", "reasonML" ]
            },
            {
                name: "Woopa4",
                githubUsername: "ajolonauta4",
                mission: "node",
                score: 4,
                stacks: [ "javascript" ]
            },
            {
                name: "Woopa5",
                githubUsername: "ajolonauta5",
                score: 5,
                mission: "node",
                stacks: [ "javascript", "elixir", "elm" ]
            },
            {
                name: "Woopa11",
                githubUsername: "ajolonauta11",
                score: 11,
                mission: "node",
                stacks: [ "javascript", "elixir", "groovy", "reasonML", "elm" ]
            },
            {
                name: "Woopa12",
                githubUsername: "ajolonauta12",
                score: 12,
                mission: "node",
                stacks: [ "javascript", "elixir", "groovy", "reasonML", "elm" ]
            },
            {
                name: "Woopa13",
                githubUsername: "ajolonauta13",
                score: 13,
                mission: "node",
                stacks: [ "javascript", "elixir", "groovy", "reasonML", "elm" ]
            },
            {
                name: "Woopa14",
                githubUsername: "ajolonauta14",
                score: 14,
                mission: "node",
                stacks: [ "javascript", "elixir", "groovy", "reasonML", "elm" ]
            },
            {
                name: "Woopa15",
                githubUsername: "ajolonauta15",
                score: 15,
                mission: "node",
                stacks: [ "javascript", "elixir", "groovy", "reasonML", "elm" ]
            }
        ]);
    });
    test("Requerimiento 2: Obtener los usernames de los explorers dependiendo la mision", () => {
        const explorersUsernameInMission = ExplorerController.getExplorersUsernameByMission("node");
        expect(explorersUsernameInMission).toEqual([
            "ajolonauta1",
            "ajolonauta2",
            "ajolonauta3",
            "ajolonauta4",
            "ajolonauta5",
            "ajolonauta11",
            "ajolonauta12",
            "ajolonauta13",
            "ajolonauta14",
            "ajolonauta15"
        ]);
    });
    test("Requerimiento 3: Retornar la cantidad de explorers dependiendo la mision", () => {
        const amountOfExplorersByMission = ExplorerController.getExplorersAmountByMission("node");
        expect(amountOfExplorersByMission).toBe("Explorers en la misión node: 10");
    });
});