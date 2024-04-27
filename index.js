document.getElementById("tipForm").addEventListener("submit", function (event) {
  event.preventDefault();

  var billAmount = parseFloat(document.getElementById("billAmount").value);
  var tipPercentage = calculateTip(billAmount);
  var tipAmount = (billAmount * tipPercentage).toFixed(2);

  document.getElementById("tipResult").innerHTML = `Recommended Tip: ${
    tipPercentage * 100
  }% ($${tipAmount})`;
});

function calculateTip(billAmount) {
  if (billAmount < 50) {
    return 0.2; // 20%
  } else if (billAmount >= 50 && billAmount < 200) {
    return 0.15; // 15%
  } else {
    return 0.1; // 10%
  }
}
