/*
Miller Raben test
*/

function miller_rabin(n,a){
   //x = a^d mod n
   //console.log("miller raben with " +n+" and "+ a)
    x = powermod(a,factor_out_2(n).d,n)
    if(x == 1 || x == n-1){
          return true// (probable prime)
    }
    for(r = 1;r<factor_out_2(n).s;r++){
        //x = x^2 mod n
        x = powermod(x,2,n)
        if(x == 1){
              return false //(composite)
        }
        if (x == n-1){
                return true //(probable prime)
        }
        break
    }
   return false //(composite)
}


function is_prime(n){
    if(n==0){
        return false
    }
    if(n==1){
        return false
    }
    if(n==2){
        return true
    }
    for(i=0;i<20;i++){
        let checking_number = Math.floor(Math.random()*(n-3)+2)
        if(!miller_rabin(n,checking_number)){
            return false
        }
    }
    return true
}

function factor_out_2 (number){
    number--
    let count = 0
    while(number % 2 ==0){
        number = number/2
        count++
    }
    console.log(count,number)
    
    return {
        d:number,
        s:count
    }
}

function powermod(base, exponent, mod){
    let answer =base
    for(i=0; i< exponent;i++){
        answer  = (answer*base) % mod
    }
    return answer
}

module.exports = {
    is_prime:is_prime
}