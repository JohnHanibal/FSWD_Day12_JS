function boxdim (width,height,depth){
    var area=(width*height);
    var volume=(width*height*depth);
    var result=[area,volume]
    return("The area of the box is: "+area+"." +"\n"+ "The volume of the box is: "+volume+".")
}

console.log(boxdim(2,7,5));