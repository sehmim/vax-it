/*!
* Start Bootstrap - Bare v5.0.2 (https://startbootstrap.com/template/bare)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-bare/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project


function init(params) {



}

init()

function bookAppointment(params) {
    alert("Appointment Has Been Booked")
    window.location.replace('history2.html')
}

function login(){
    document.getElementById("loginButton").onclick = function () {
        alert("hi")
    };
}

function confirmPatientCheckIn() {
    alert("Appointment Has Been Booked")
    window.location.replace('patientConfirm.html')
}

function pickedDate() {
    let pickedDate = new Date(document.getElementById("bookingDate").value)

    if ((pickedDate.getDate() +1 )% 2 === 0){
        window.location.replace('calender22.html')
    } else if ((pickedDate.getDate() +1 )% 3 === 0){
        window.location.replace('calender33.html')
    } else if ((pickedDate.getDate() +1 )% 5 === 0){
        window.location.replace('calender55.html')
    } else if ((pickedDate.getDate() +1 )% 7 === 0){
        window.location.replace('calender77.html')
    } else if ((pickedDate.getDate() +1 )% 11 === 0){
        window.location.replace('calender11.html')
    } else {
        window.location.replace('calender2.html')
    }
}