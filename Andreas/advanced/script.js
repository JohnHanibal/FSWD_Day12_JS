function timeConvert (minutes){
    var hrs =Math.floor(minutes/60)
    var rest =minutes%60

    return minutes+" minutes = "+hrs+" hour(s) and "+rest+" minutes."
}
console.log (timeConvert(80))