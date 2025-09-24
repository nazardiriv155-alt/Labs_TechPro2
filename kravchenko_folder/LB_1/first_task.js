let m=-2;
let n = 3.87;
function arcctg(x){
    return Math.PI/2-Math.atan(x)
}
let x = arcctg(5.4/m)+m*n;
let y=Math.sqrt(Math.abs(m-3))+Math.log(n**2);
let part1=Math.log(Math.pow(Math.abs(x),-m))/Math.log(Math.PI);
let part2=Math.abs(Math.PI/5-y);
let j=part1+part2;
console.log("Result:"+j);