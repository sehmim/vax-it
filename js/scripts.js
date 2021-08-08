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