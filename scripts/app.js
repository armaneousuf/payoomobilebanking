// Homepage login button functionality

const mobileNumber = 1234567890;
const pinNumber = 1234;
document.querySelector('#login-btn').addEventListener('click', function (e) {
    e.preventDefault();
    
    const mobileNumberValue = document.querySelector('#mobile').value.trim();
    const pinNumberValue = document.querySelector("#password").value.trim();

    const mobileNumberValueConverter = parseInt(mobileNumberValue);
    const pinNumberValueConverter = parseInt(pinNumberValue);

    // console.log(mobileNumberValueConverter);

    if (mobileNumberValueConverter === mobileNumber && pinNumberValueConverter === pinNumber) {
        window.location.href='./home.html'
    } else {
        alert('invalid credential. Use 1234567890 and 1234');
    }
    
})
