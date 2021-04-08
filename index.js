/*
You are to find out any possible prime numbers that can be formed using digits from a number entered by a user without re-arranging them.
*/
const number_theory = require("./number_theory.js")

let user_input = prompt("enter a number")
if(isNaN(user_input)) {
    console.log("invalid number")
    process.exit(0)
}

for(let start =0;start<user_input.length;start++){
    for(let end= start+1; end<=user_input.length; end++ ){
        console.log(user_input.substring(start,end ))
        let possiblility = user_input.substring(start,end )
        if(number_theory.is_prime(Number(possiblility))){
            console.log(`${possiblility} is prime`)
        }else{
            console.log(`${possiblility} isn't prime`)
        }
    }
}




