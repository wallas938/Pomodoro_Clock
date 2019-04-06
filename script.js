var timer = document.getElementById('timer')
var dizaineMinute = document.getElementById('dizaine-minute')
var uniteMinute = document.getElementById('unite-minute')
var dizaineSeconde = document.getElementById('dizaine-seconde')
var uniteSeconde = document.getElementById('unite-seconde')


function uniteSecondeIncrementer(toBeIncremented) {
	
	intNumber = Number(toBeIncremented.innerHTML)

	intNumberIncremented = intNumber >= 9 ? 0 : intNumber+1

	unit = intNumberIncremented

	toBeIncremented.innerHTML = unit
}

function uniteMinuteIncrementer(toBeIncremented) {
	
	intNumber = Number(toBeIncremented.innerHTML)

	intNumberIncremented = intNumber >= 9 ? 0 : intNumber+1

	unit = intNumberIncremented

	toBeIncremented.innerHTML = unit
}

function dizaineSecondeIncrementer(toBeIncremented) {
	
	intNumber = Number(toBeIncremented.innerHTML)

	intNumberIncremented = intNumber >= 5 ? 0 : intNumber+1

	unit = intNumberIncremented

	toBeIncremented.innerHTML = unit
}

function dizaineMinuteIncrementer(toBeIncremented) {
	
	intNumber = Number(toBeIncremented.innerHTML)

	intNumberIncremented = intNumber >= 5 ? 0 : intNumber+1

	unit = intNumberIncremented

	toBeIncremented.innerHTML = unit
}

function compteur() {

 uniteSecondeIncrementer(uniteSeconde)

 if (uniteSeconde.innerHTML >= "9") {

 	setTimeout(function() {dizaineSecondeIncrementer(dizaineSeconde)}, 1000)
 
 }

 if (dizaineSeconde.innerHTML >= "5" && uniteSeconde.innerHTML >= "9") {

 	setTimeout(function() {uniteMinuteIncrementer(uniteMinute)}, 1000)
 }

 if (uniteMinute.innerHTML >= "9" && dizaineSeconde.innerHTML >= "5" && uniteSeconde.innerHTML >= "9") {

 	setTimeout(function() {dizaineMinuteIncrementer(dizaineMinute)}, 1000)
 }

}

var timer = setInterval(compteur, 1000)

/* Boutons a gerer */