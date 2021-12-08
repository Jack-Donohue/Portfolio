/*
Student Name: Jack Donohue
File Name: script.js
Date:11/29/2021
*/

//Hamburger menu function
function hamburger() {
    var menu = document.getElementById("menu-links");
    var header = document.getElementById("cloud-banner");
    if (menu.style.display === "block" && header.style.display === "none") {
        menu.style.display = "none";
        header.style.display = "block";
    } else {
        menu.style.display = "block";
        header.style.display = "none";
    }
}

//Global variables
