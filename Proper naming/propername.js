function calculateTotalAmount(purchases) {
    let totalAmount = 0;
    purchases.forEach(purchase => {
      totalAmount += purchase;
    });
    return totalAmount;
  }
  
  let topPurchasers = [10000, 20000, 30000];
  console.log(calculateTotalAmount(topPurchasers));
  