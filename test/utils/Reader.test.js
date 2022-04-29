const Reader = require("../../lib/utils/Reader");

describe("Test de Reader", () =>{
    test("1. Leer el archivo explorers.json", () =>{
        const explorers = Reader.readJsonFile("./data/explorers.json");
        expect(explorers).not.toBeUndefined();
    });
});