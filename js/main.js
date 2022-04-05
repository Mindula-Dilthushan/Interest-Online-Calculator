// <!--Interest Online Calculator-->
// <!--Mindula Dilthushan-->
// <!--minduladilthushan1@gmail.com-->
// <!--2020-04-05-->

var button = document.getElementById("calculateButton");
var cleanButton = document.getElementById("cleanButton");

function interestCalculate() {

    var total = 0;
    var amount = document.getElementById("amountId").value;
    var interest = document.getElementById("interestId").value;
    var numberOfYear = document.getElementById("yearId").value;
    var timeYear = document.getElementById("timeInYearId").value;

    if (amount > 0 && interest > 0 && numberOfYear > 0 && timeYear > 0) {
        total = (amount * Math.pow((1 + (interest / (timeYear * 100))), (timeYear * numberOfYear)));
        total = total.toFixed(2);
        document.getElementById("interest_data").innerHTML = total;
        $('#display_data').css({
            'display': 'block'
        });
    } else {
        alert("please enter valid values !")
    }
}

function clearFields() {

    $('#amountId').val('');
    $('#interestId').val('');
    $('#yearId').val('');
    $('#timeInYearId').val('');
}

button.addEventListener("click", interestCalculate);
cleanButton.addEventListener("click", clearFields);