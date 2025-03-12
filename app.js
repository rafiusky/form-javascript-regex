function validate() {

    let name = document.getElementById('name').value;
    let nameRegex = /[[a-z+A-Z].{5,}/
    let nameResult = nameRegex.test(name);

    let email = document.getElementById('email').value;
    let emailRegex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$/;
    let emailResult = emailRegex.test(email);

    let phoneNumber = document.getElementById('phone-number').value;
    let phoneRegex = /[0-9]{2}-[0-9]{5}-[0-9]{4}/;
    let phoneResult = phoneRegex.test(phoneNumber);

    let postalCode = document.getElementById('postal-code').value;
    let postalRegex = /[0-9]{5}-[0-9]{3}/;
    let postalResult = postalRegex.test(postalCode);

    //alert("Name : " + nameResult + " / Email: " + emailResult + " / Phone: " + phoneResult + " / Postal code: " + postalResult );

    if (nameResult == false) {
        alert('Please enter a valid name');
    }
    if (emailResult == false) {
        alert('Please enter a valid email');
    }

    if (phoneResult == false) {
        alert('Please enter a valid phone number');
    }

    if (postalResult == false) {
        alert('Please enter a valid postal number');
        return false;
    }
    return true;

}

