function grades (Math,Physics,English){
    var sum = (Math+Physics+English)
    var average = (sum/3)
    return ("Sum:"+sum+"\n"+"Average:"+average)
}
console.log (grades(3,4,5));