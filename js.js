var elHeading = document.querySelector("[data-heading]")
var elForm = document.querySelector("form")
var elSelect = document.querySelector("#select")
var elInput = document.querySelector("[data-input]")
var kursD = 11.415
var kursE = 12.703
var kursR = 142.73

elForm.addEventListener("submit", function(evt) {
  evt.preventDefault();
  if(elSelect.value === "USD") {
    elHeading.textContent = `USD ${(elInput.value / kursD).toFixed(2)}`
  } else if(elSelect.value === "RU") {
    elHeading.textContent = `RU ${(elInput.value / kursR).toFixed(2)}`
  } else if(elSelect.value === "EU") {
    elHeading.textContent = `EU ${(elInput.value / kursE).toFixed(2)}`
  }
})