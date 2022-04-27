const FizzBuzzService = require("../../lib/services/FizzbuzzService")
describe("Test de FizzbuzzService", () =>{
    test("Requerimiento 1: Retornar el valor del score en el trick", () =>{
        const explorer1 = {name: "Explorer1", score: 1}
        expect(FizzBuzzService.applyValidationInExplorers(explorer1)).toEqual({name: "Explorer1", score: 1, trick: 1})
        console.log(explorer1)
    })
    test("Requerimiento 2: Retornar el valor FIZZ en trick", ()=>{
        const explorer2 = {name: "Explorer2", score: 3}
        expect(FizzBuzzService.applyValidationInExplorers(explorer2)).toEqual({name: "Explorer2", score: 3, trick: "FIZZ"})
        console.log(explorer2)
    })
    test("Requerimiento 3: Retornar el valor BUZZ en el trick", ()=>{
        const explorer3 = {name: "Explorer3", score: 5}
        expect(FizzBuzzService.applyValidationInExplorers(explorer3)).toEqual({name: "Explorer3", score: 5, trick:"BUZZ"})
        console.log(explorer3)
    })
    test("Requerimiento 4: Retornar el valor FIZZBUZZ en el trick", () => {
        const explorer4 = {name: "Explorer3", score: 15}
        expect(FizzBuzzService.applyValidationInExplorers(explorer4)).toEqual({name: "Explorer3", score: 15, trick:"FIZZBUZZ"})
        console.log(explorer4)
    })
})