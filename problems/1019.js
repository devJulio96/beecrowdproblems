export function problem(lines){
let tmp = parseInt(lines[0]);

let tmpHoras = tmp/3600;
let restoHoras = tmp%3600;

let tmpMin = restoHoras/60;
let restoSeg = restoHoras%60;

console.log(`${parseInt(tmpHoras)}:${parseInt(tmpMin)}:${restoSeg}`);
}