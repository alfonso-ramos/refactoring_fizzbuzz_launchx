class FizzbuzzService{
    static applyValidationInExplorers(explorer){
        if(explorer.score % 5 === 0 && explorer.score % 3 === 0){
            explorer.trick = "FIZZBUZZ";
            return explorer;
        }else if(explorer.score % 3 === 0){
            explorer.trick = "FIZZ";
            return explorer;
        }else if (explorer.score % 5 === 0){
            explorer.trick = "BUZZ";
            return explorer;
        }else{
            explorer.trick = explorer.score;
            return explorer;
        }
    }

    static applyValidationInNumber(number){
        let trick;
        if(number.score % 5 === 0 && number.score % 3 === 0){
            trick = "FIZZBUZZ";
            return trick;
        }else if(number.score % 3 === 0){
            trick = "FIZZ";
            return trick;
        }else if (number.score % 5 === 0){
            trick = "BUZZ";
            return trick;
        }else{
            trick = number.score;
            return trick;
        }
    }
}

module.exports = FizzbuzzService;