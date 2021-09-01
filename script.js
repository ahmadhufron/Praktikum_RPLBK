var a = 0;
var q2 = () => {
    a = 5;
    console.log("ini child scope: " + a);
}
q2();

console.log("ini root scope: " + a);
(a==5) ? console.log("true") : console.log("false");

var angka = [1,2,3];
var dobel = angka.map(function(num){
    return num;
})