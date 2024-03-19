document.getElementById('payButton').addEventListener('click', function() {
    var cardNumber = document.getElementById('cardNumber').value;
    var expiryDate = document.getElementById('expiryDate').value;
    var cvv = document.getElementById('cvv').value;
  
    // Here you would typically perform backend processing and integrate with a payment gateway
    
    // For this example, just showing a simple message
    document.getElementById('paymentStatus').textContent = "Payment successful!";
  });
  