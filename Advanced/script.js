function timeConv (min) {
    hrs = Math.floor(min /60);
    rest=min%60;
    return (min + " minutes" + " is " + hrs + " hour(s) and " + rest + " minutes.");
}

console.log(timeConv(13456));

// function timeConv (min) {
//     hrs = parseInt(min /60);
//     rest=min%60;
//     return (`${min} minutes is ${hrs} hour(s) and ${rest} minutes.`);
// }

// console.log(timeConv(186));