let fxRates = {
    INR: 72,
    EUR: 0.9
}

let discounts = {
    INR : 0.1,
    EUR: 0.2
}
let inCart = {
    id: 1,
    total: 81000,
    currency: "INR"
}
let euCart = {
    id: 2,
    total,
    currency: "EUR"
}

function getTotalPriceFn(cart){
    // This calculates the discounted final price in local curr
    cart.finalTotal = cart.tottal * (1- discounts[cart.currency]);
    // Converts to USD
    function totalUSDPrice(){
        return cart.finalTotal / fxRates[cart.currency];
    }
    return totalUSDPrice;
}

let inCartTotalUSD = getTotalPriceFn(inCart);

console.log("Type of returned function", typeof inCartTotalUSD);
console.log("tptal of order from India: ", inCartTotalUSD());

let euCartTotalUSD = getTotalPriceFn(euCart);
console.log("Total of order from EU: ", euCartTotalUSD);