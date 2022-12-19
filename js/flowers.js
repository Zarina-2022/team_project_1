// When the reader opens the page, he will see the current date:
var flowersDate = document.getElementById('flowersDate');
var tarih = new Date()

flowersDate.innerText=tarih.toLocaleDateString().replaceAll("/",".")

// replaceAll("old","new") textin icinde degistirmek istedigini ilk yere yaz, yensini 2.yere yaz
// sadece replace("old","new") yazarsan sadece ilkini bulup degistirir