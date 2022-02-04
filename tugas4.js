function tinggi(){
  var x = 160;
  var y = 165;
  var z = 178;

  if (x > y) {
    if(x > z ) {console.log(" x tertinggi dan urutannya",x,z,y) }
     else {console.log("z tertinggi dan urutannya",z,x,y)}
      }
  else{
        if(z>y) {console.log("z tertinggi dan urutannya ",z,y,x)}
        else {
          console.log("y tertinggi dan urutannya ",y,z,x)}
        }
}
console.log(tinggi())
