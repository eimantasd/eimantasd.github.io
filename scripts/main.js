function saveUserData() {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var yyyy = document.getElementById('yyyy').value;
    var mm = document.getElementById('mm').value;
    var dd = document.getElementById('dd').value;

    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    var currentMonth = currentDate.getMonth() + 1; // Months are zero-indexed
    var currentDay = currentDate.getDate();

    if (mm < 1 || mm > 12 || yyyy <= 0 || dd < 1 || dd > 30) {
        alert("Patikrinkite datą. Nenaudokite neigiamų skaičių");
        return;
    }

    if (!/^[a-zA-Z]+$/.test(firstName)) {
        alert("Neteisingas vardas, naudokite tik raides");
        return;
    }

    if (!/^[a-zA-Z]+$/.test(lastName)) {
        alert("Neteisingas pavardė, naudokite tik raides");
        return;
    }

    var user = {
        firstName: firstName,
        lastName: lastName,
        yyyy: yyyy,
        mm: mm,
        dd: dd
    };

    console.log("Išsaugota informacija:", user);

    var likoLaukti = (yyyy - currentYear) * 365 + (mm - currentMonth) * 30 + (dd - currentDay)

    var galas = (likoLaukti % 10 === 0) ? " dienų" :
                (likoLaukti % 10 === 1) ? " dieną" : " dienas";

    var outputText = firstName + "<br>"
    + lastName + "<br>"
    + yyyy + " " + mm + " " + dd + "<br><br>" + firstName + " " + lastName + " turi laukti " + likoLaukti + galas;

    var fontSize = (likoLaukti > 7000) ? '20px' :
                   (likoLaukti > 1000 && likoLaukti <= 7000) ? '16px' : '10px';


    
// Update the content of the output div
var outputDiv = document.getElementById('outputDiv');
outputDiv.innerHTML = outputText;
outputDiv.style.fontSize = fontSize;

}

