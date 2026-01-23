document
  .querySelector("#add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();

    const bank = document.querySelector("#bank-select").value;
    const accountNumber = document.querySelector("#bank-num").value;
    const amount = parseFloat(document.querySelector("#add-amount").value);
    const pin = document.querySelector("#password").value;
    const totalAmount = parseFloat(
      document.querySelector("#total-amount").innerText,
      );

      const totalNewBalance = amount + totalAmount;
      
      document.querySelector('#total-amount').innerText = totalNewBalance;

    
  });
