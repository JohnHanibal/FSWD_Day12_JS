function atm (amount){

    var $100=Math.floor(amount/100)
    
    var rest =minutes%60

    return "You will receive "+$100+" 100€"+"\n"+$50+" 50€"+"\n"+$20+" 20€ and "+"\n"+$10+"10€ bills now"
}
console.log (atm(240))