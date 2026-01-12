// 6) Bank Balance Check
//If withdraw is more than balance → reject.
//Else subtract and show new balance. If new balance is low → warning.

let balance = 5000;
let withdrawAmout =4500;

if (withdrawAmount >= balance){
    console.log("You have Insuffient balance "); 
} else {
    balance = balce - winthdrawAmount ;
    console.log("Withdral Succesfull");
        console.log("New balance is :", balance);
}
if (balance <= 1000) {
    console.log("Warning : Low balance");
}
