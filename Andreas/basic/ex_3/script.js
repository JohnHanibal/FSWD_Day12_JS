function ageCalculator(birth_year,current_year){
    return current_year-birth_year
}
    var thisYear=new Date();   
    
    var yourAge=ageCalculator(1993,thisYear.getFullYear());
    
    var altAge=(yourAge-1);

    console.log(thisYear);
   

    console.log("Your are either "+yourAge+" or " +altAge+".");