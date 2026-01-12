//5) Water Tracker Logic (App-style messages)

let totalWater =10000;
let goalWater = 2000;

if (totalWater >= goalWater) {
    console.log("Goal Reached"); }
    else if (totalWater >= goalWater * 0.75) {
        console.log("Almost there!! Keep going!");}

    else if (totalWater >= goalWater * 0.5){
        console.log("Halfway there! Good job!");}

    else {
        console.log("You need to really start drinking water");
    }