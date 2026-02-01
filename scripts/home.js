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

document
  .querySelector("#add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();

    const bank = getInputValue("#bank-select");
    const accountNumber = getInputValue("#bank-num");
    const amount = getInputNumber("#add-amount");
    const pin = getInputNumber("#password");
    const totalAmount = getInnerText("#total-amount");

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

    if (agentNum.length < 11) {
      alert("Please provide a valid Agent number");
      return;
    }

    if (cashoutPin !== pinNumber) {
      alert("Please provide a valid Pin number");
      return;
    }

    if (isNaN(cashoutAmount) || cashoutAmount <= 0) {
      alert("Please enter a valid number");
      return;
    }

    if (cashoutAmount > totalAmount) {
      alert("Insufficient Balance");
      return;
    }

    const newBalance = totalAmount - cashoutAmount;
    setInnerText("#total-amount", newBalance);

    document.querySelector("#cashout-amount").value = "";
    document.querySelector("#cashout-pin").value = "";
    document.querySelector("#agent-num").value = "";
  });

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