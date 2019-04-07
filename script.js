var timer = document.getElementById('timer')
var dizaineMinute = document.getElementById('dizaine-minute')
var uniteMinute = document.getElementById('unite-minute')
var dizaineSeconde = document.getElementById('dizaine-seconde')
var uniteSeconde = document.getElementById('unite-seconde')
var playAndPause = document.getElementById('pause-play')
var reset = document.getElementById('reset')
var isStarted = false;
var timer

function uniteSecondeDecrementer(toBeDecremented) {
	
	intNumber = Number(toBeDecremented.innerHTML)

	intNumberDecremented = intNumber >= 9 ? 0 : intNumber+1

	unit = intNumberDecremented

	toBeDecremented.innerHTML = unit
}

function uniteMinuteDecrementer(toBeDecremented) {
	
	intNumber = Number(toBeDecremented.innerHTML)

	intNumberDecremented = intNumber >= 9 ? 0 : intNumber+1

	unit = intNumberDecremented

	toBeDecremented.innerHTML = unit
}

function dizaineSecondeDecrementer(toBeDecremented) {
	
	intNumber = Number(toBeDecremented.innerHTML)

	intNumberDecremented = intNumber >= 5 ? 0 : intNumber+1

	unit = intNumberDecremented

	toBeDecremented.innerHTML = unit
}

function dizaineMinuteDecrementer(toBeDecremented) {
	
	intNumber = Number(toBeIncremented.innerHTML)

	intNumberDecremented = intNumber >= 9 ? 0 : intNumber+1

	unit = intNumberDecremented

	toBeDecremented.innerHTML = unit
}

function compteur() {

 uniteSecondeDecrementer(uniteSeconde)

 if (uniteSeconde.innerHTML >= "9") { setTimeout(function() {dizaineSecondeDecrementer(dizaineSeconde)}, 980)}

 if (dizaineSeconde.innerHTML >= "5" && uniteSeconde.innerHTML >= "9") { setTimeout(function() {uniteMinuteDecrementer(uniteMinute)}, 1000) }

 if (uniteMinute.innerHTML >= "9" && dizaineSeconde.innerHTML >= "5" && uniteSeconde.innerHTML >= "9") {setTimeout(function() {dizaineMinuteDecrementer(dizaineMinute)}, 1000) }

}

function startTimer() {
	if(!isStarted) {
		timer = setInterval(compteur, 1000)
		isStarted = true
	}else {
		clearInterval(timer)
		isStarted = false
	}
}

function remettreBaliseAzero() {
	dizaineMinute.innerHTML = "0"
	uniteMinute.innerHTML = "0" 
	dizaineSeconde.innerHTML = "0"
	uniteSeconde.innerHTML = "0"
}

function reloadTimer() {
	remettreBaliseAzero()
}
/* Boutons a gerer */

playAndPause.addEventListener('click', startTimer)
reset.addEventListener('click', reloadTimer)