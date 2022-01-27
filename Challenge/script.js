function atm(amt){
    quotient = parseInt(amt/100);
    quotient2 = parseInt((amt-100*quotient)/50);
    quotient3 =parseInt((amt-100*quotient-50*quotient2)/20);
    quotient4= parseInt((amt-100*quotient-50*quotient2-20*quotient3)/10);

    return (quotient+" notes of 100 Euro " +"\n"+ quotient2 + " notes of 50 Euro "  +"\n"+quotient3 +" notes of 20 Euro " +"\n"+quotient4 +" notes of 10 Euros ");
}

document.write(atm(280));