// Add Money Logics
const pinNumber = 1234;

document
  .querySelector("#add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();

    const bank = document.querySelector("#bank-select").value;
    const accountNumber = document.querySelector("#bank-num").value;
    const amount = parseFloat(document.querySelector("#add-amount").value);
    const pin = parseFloat(document.querySelector("#password").value);
    const totalAmount = parseFloat(
      document.querySelector("#total-amount").innerText
    );

    if (accountNumber.length < 11) {
      alert("Please provide a valid Account number");
      return;
    }

    if (pin !== pinNumber) {
      alert("Please provide a valid Pin number");
      return;
    }

    if (isNaN(amount) || amount <= 0) {
      alert("Please enter a valid number");
      return;
    }

    const totalNewBalance = amount + totalAmount;

    document.querySelector("#total-amount").innerText = totalNewBalance;

    // This clears the physical input box on the screen
    document.querySelector("#add-amount").value = "";
    document.querySelector("#bank-num").value = "";
    document.querySelector("#password").value = "";
  });

// Cashout Logics

document.querySelector("#cashout-withdraw-btn").addEventListener('click', function (e) {
  e.preventDefault();

  const agentNum = document.querySelector('#agent-num').value;
  const cashoutAmount = parseFloat(
    document.querySelector("#cashout-amount").value,
  );
  const cashoutPin = parseFloat(document.querySelector('#cashout-pin').value);
  const totalAmount = parseFloat(document.querySelector('#total-amount').innerText);

  if (agentNum.length < 11) {
    alert('Please provide a valid Agent number');
    return;
  }

  if (cashoutPin !== pinNumber) {
    alert('Please provide a valid Pin number');
    return;
  }

  if (isNaN(cashoutAmount) || cashoutAmount <= 0) {
    alert('Please enter a valid number');
    return;
  }

  if (cashoutAmount > totalAmount) {
    alert('Insufficient Balance');
    return;
  }

  const newBalance = totalAmount - cashoutAmount;
  document.querySelector('#total-amount').innerText = newBalance;

  document.querySelector("#cashout-amount").value = "";
  document.querySelector("#cashout-pin").value = "";
  document.querySelector("#agent-num").value = "";
})







document.querySelector("#add-btn").addEventListener("click", function () {
  document.querySelector("#cashout-parent").style.display = "none";
  document.querySelector("#add-money-parent").style.display = "block";
});
document.querySelector("#cashout-btn").addEventListener("click", function () {
  document.querySelector("#cashout-parent").style.display = "block";
  document.querySelector("#add-money-parent").style.display = "none";
});
