function productInputValue(product, price, isIncarasing) {
    const caseInput = document.getElementById(product + '-input');
    let caseNumber = caseInput.value;
    if (isIncarasing == true) {
        caseNumber = parseInt(caseNumber) + 1;
    }
    else if (caseNumber > 0) {
        caseNumber = parseInt(caseNumber) - 1;
    }
    caseInput.value = caseNumber;
    const caseTotal = document.getElementById(product + "-total");
    caseTotal.innerText = caseNumber * price;
    calculateTotal();
};
function getInputValue(product) {
    const phoneInput = document.getElementById(product + "-input");
    let phoneNumber = parseInt(phoneInput.value);
    return phoneNumber;
}
function calculateTotal() {
    let phoneTotal = getInputValue("phone") * 1219;
    let caseTotal = getInputValue("case") * 59;
    let subTotal = phoneTotal + caseTotal;
    let tex = subTotal / 10;
    let allTotal = subTotal + tex;
    document.getElementById("sub-total").innerText = subTotal;
    document.getElementById("tex").innerText= tex;
    document.getElementById("total").innerText = allTotal;
}


document.getElementById("case-positive").addEventListener('click', function () {
    productInputValue("case", 59, true);

});
document.getElementById("case-nagative").addEventListener('click', function () {
    productInputValue("case", 59, false);
});
document.getElementById("phone-positive").addEventListener('click', function () {
    productInputValue("phone", 1219, true);
});
document.getElementById("phone-nagative").addEventListener('click', function () {
    productInputValue("phone", 1219, false);
});