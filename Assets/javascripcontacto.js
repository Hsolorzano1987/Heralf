function ValidFields() {
    var firstName = document.getElementById("firsName").value;
    var secondName = document.getElementById("secondName").value;
    var lastName = document.getElementById("lastName").value;
    var secondLastName = document.getElementById("secondLastName").value;
    var age = document.getElementById("age").value;
    var gender = document.getElementById("gender").value;

    var errorFirstName = document.getElementById("errorFirstName")
    var errorSecondName = document.getElementById("errorSecondName")
    var errorLastName = document.getElementById("errorLastName")
    var errorSecondLastName = document.getElementById("errorSecondLastName")
    var errorAge = document.getElementById("errorAge")
    var ErrorGender = document.getElementById("errorGender")

    if(firstName === "" || firstName.length > 10) {
        errorFirstName.innerText = "Name empty or size greater thand 10";
        return;
    } else {
        errorFirstName.innerText="";
    }

    if(SecondName.length > 10) {
        errorSecondName.innerText = "size greater thand 10";
        return;
    } else {
        errorSecondName.innerText="";
    }

    if(isNaN(Number(age))) { 
        errorAge.innerText = "age is not number";
    }

    if(Number(age) < 0 || Number(age) > 100){
        errorAge.innerText = "Invalid age";
        return;
    } else {
        errorAge.innerText = "";
    }

    if(gender === "e"){
        ErrorGender.innerText = "Invalid age"
    }


    if(LastName.length > 10) {
        errorlastName.innerText = "size greater thand 10";
        return;
    } else {
        errorlastName.innerText="";
    }

    if(SecondLastName.length > 10) {
        SecondLastName.innerText = "size greater thand 10";
        return;
    } else {
        errorSecondLastName.innerText="";
    }

    if(Age > 100) {
        errorAge.innerText = "Invalid age";
        return;
    } else {
        errorAge.innerText="";
    }
}