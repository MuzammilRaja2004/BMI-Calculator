// function bmifun(){
//     var weight = document.getElementById('weight').value;
//     var height = document.getElementById('height').value;
//     height = height*12;
//     height = height*0.025;

//     var newweight = weight/(height*height);
//     newweight = Math.round(newweight)
//     document.getElementById("bmi-value").value = newweight;
// }




function bmifun(){
    var weight = document.getElementById('weight').value;
    var height = document.getElementById('height').value;
     height = height*12;
     height = height*0.025;

     var newweight = weight / (height*height);
     newweight = Math.round(newweight)
     document.getElementById('bmi-value').value = newweight;
}
























