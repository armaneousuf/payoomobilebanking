// Add Money Logics
const pinNumber = 1234;

// Reusable function

function getInputValue(id) {
  return document.querySelector(id).value;
}

function getInputNumber(id) {
  return parseFloat(document.querySelector(id).value);
}

function getInnerText(id) {
  return parseFloat(document.querySelector(id).innerText);
}

function setInnerText(id, text) {
  document.querySelector(id).innerText = text;
}

function handleToggle(id) {
  const forms = document.querySelectorAll(".form");

  for (const form of forms) {
    form.style.display = "none";
  }

  document.querySelector(id).style.display = "block";
}

function validateAccountNumber(accountNumber) {
  if (accountNumber.length < 11) {
    alert('Please provide a valid Account Number');
    return false;
  }
  return true;
}

function validatePin(inputPin, validPin) {
  if (inputPin !== validPin) {
    alert('Please provide a valid Pin Number');
    return false;
  }
  return true;
}

function validateAmount(amount) {
  if (isNaN(amount) || amount <= 0) {
    alert('Please Provide a valid Amount');
    return false;
  }
  return true;
}

function validateBalance(amount, totalAmount) {
  if (amount > totalAmount) {
    alert('Insufficient Balance');
    return false;
  }
  return true;
}

document
  .querySelector("#add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();

    const bank = getInputValue("#bank-select");
    const accountNumber = getInputValue("#bank-num");
    const amount = getInputNumber("#add-amount");
    const pin = getInputNumber("#password");
    const totalAmount = getInnerText("#total-amount");


    if (
      !validateAccountNumber(accountNumber) ||
      !validatePin(pinNumber, pin) ||
      !validateAmount(amount)
    )
      return;

    const totalNewBalance = amount + totalAmount;

    setInnerText("#total-amount", totalNewBalance);

    // This clears the physical input box on the screen
    document.querySelector("#add-amount").value = "";
    document.querySelector("#bank-num").value = "";
    document.querySelector("#password").value = "";
  });

// Cashout Logics
document
  .querySelector("#cashout-withdraw-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();

    const agentNum = getInputValue("#agent-num");
    const cashoutAmount = getInputNumber("#cashout-amount");
    const cashoutPin = getInputNumber("#cashout-pin");
    const totalAmount = getInnerText("#total-amount");

    if (
      !validateAccountNumber(agentNum) ||
      !validatePin(pinNumber, cashoutPin) ||
      !validateAmount(cashoutAmount) ||
      !validateBalance(cashoutAmount, totalAmount)
    )
      return;


    const newBalance = totalAmount - cashoutAmount;
    setInnerText("#total-amount", newBalance);

    document.querySelector("#cashout-amount").value = "";
    document.querySelector("#cashout-pin").value = "";
    document.querySelector("#agent-num").value = "";
  });

// Transfer Money Logics
document
  .querySelector("#transfer-send-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();

    const userAccountNumber = getInputValue("#user-account-num");
    const transferAmount = getInputNumber("#transfer-amount");
    const transferPin = getInputNumber("#transfer-pin");
    const totalAmount = getInnerText("#total-amount");

    if (
      !validateAccountNumber(userAccountNumber) ||
      !validatePin(transferPin, pinNumber) ||
      !validateAmount(transferAmount) ||
      !validateBalance(transferAmount, totalAmount)
    )
      return;

    const newBalance = totalAmount - transferAmount;
    setInnerText("#total-amount", newBalance);

    document.querySelector("#transfer-amount").value = "";
    document.querySelector("#transfer-pin").value = "";
    document.querySelector("#user-account-num").value = "";
  });

// Bonus coupon Logics
document
  .querySelector("#get-bonus-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();

    const bonusCoupon = getInputNumber("#bonus-coupon");
    const totalAmount = getInnerText("#total-amount");

    if (
      !validateAmount(bonusCoupon)
    )
      return;

    const newBalance = totalAmount + bonusCoupon;
    setInnerText("#total-amount", newBalance);

    document.querySelector("#bonus-coupon").value = "";
  });

// Pay Bill Logics

document.querySelector('#pay-bill-btn').addEventListener('click', function (e) {
  e.preventDefault();

  const payBillBank = getInputValue("#pay-bill-bank-select");
  const payBillBankAccount = getInputValue("#pay-bill-account-number");
  const payBillAmount = getInputNumber('#pay-bill-amount')
  const payBillAmountPin = getInputNumber("#pay-bill-pin");
  const totalAmount = getInnerText('#total-amount')

  if (
    !validateAccountNumber(payBillBankAccount) ||
    !validatePin(pinNumber, payBillAmountPin) ||
    !validateAmount(payBillAmount) ||
    !validateBalance(payBillAmount, totalAmount)
  )
    return;
  
  const newBalance = totalAmount - payBillAmount;
  setInnerText('#total-amount', newBalance);

  document.querySelector("#pay-bill-amount").value = "";
  document.querySelector("#pay-bill-pin").value = "";
  document.querySelector("#pay-bill-account-number").value = "";
})















// Toggle buttons
document.querySelector("#add-btn").addEventListener("click", function () {
  handleToggle("#add-money-parent");
});

document.querySelector("#cashout-btn").addEventListener("click", function () {
  handleToggle("#cashout-parent");
});

document.querySelector("#transfer-btn").addEventListener("click", function () {
  handleToggle("#transfer-parent");
});

document.querySelector("#bonus-btn").addEventListener("click", function () {
  handleToggle("#get-bonus-parent");
});

document.querySelector("#bill-btn").addEventListener("click", function () {
  handleToggle("#pay-bill-parent");
});

document
  .querySelector("#transactions-btn")
  .addEventListener("click", function () {
    handleToggle("#transaction-parent");
  });
