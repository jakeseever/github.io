/*
============================================
; Title:  site.js
; Author: Jake Seever
; Date:   03 March 2019
; Description: JavaScript for the Jake Seever portfolio site
;===========================================
*/


// Start

window.onload = function(){
  displayFooterInfo();
};

function displayFooterInfo() {

  // Variables to output
  let author = "Jake Seever";
  let project = "Portfolio Project"
  var d = new Date();
  var year = d.getFullYear();

  // output to the footer
  var footerContent = document.getElementById("footerContent");
  footerContent.innerHTML = author + " - " + project + " - " +  year;

}
