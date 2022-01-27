function atm(amt){
    quotient = parseInt(amt/100);
    quotient2 = parseInt((amt-100*quotient)/50);
    quotient3 = parseInt((amt-100*quotient-50*quotient2)/20);
    quotient4= parseInt((amt-100*quotient-50*quotient2-20*quotient3)/10);

    return (amt + " = " + "<br>" + quotient+" note(s) of 100 Euro " + "<br>" + quotient2 + " note(s) of 50 Euro " + "<br>" + quotient3 + " note(s) of 20 Euro " + "<br>" + quotient4 + " note(s) of 10 Euros ");
}

document.write(atm(1345));