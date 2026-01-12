//2) Shopping Discount System

// You have a bill amount. Decide discount percent based on range, then calculate final price.

let totalAmount = 2000;
let discountPercent = 0;

if (totalAmount >= 5000){
    discountPercent = 20 ;

}
else if (totalAmount >= 4000){
    discountPercent = 15 ;
}
else if (totalAmount >=3000){
    discountPercent = 10;

}else {
    discountPercent = 0;
}

let discountAmount =(totalAmount * discountPercent)/100;
let finalAmount = totalAmount - discountAmount;


console.log("Total Amount :", totalAmount);
console.log("Disocunt amount:", discountAmount + "%");
console.log("FInal Amount:", finalAmount);

