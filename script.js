var timer = document.getElementById('timer')
var dizaineMinute = document.getElementById('dizaine-minute')
var uniteMinute = document.getElementById('unite-minute')
var dizaineSeconde = document.getElementById('dizaine-seconde')
var uniteSeconde = document.getElementById('unite-seconde')
var playAndPause = document.getElementById('pause-play')
var reset = document.getElementById('reset')
var isStarted = false
var timeOver = false
var pause
var timer

function uniteSecondeDecrementer(toBeDecremented) {

	intNumber = Number(toBeDecremented.innerHTML)

	intNumberDecremented = intNumber == 0 ? 9 : intNumber-1

	unit = intNumberDecremented

	toBeDecremented.innerHTML = unit
}

function uniteMinuteDecrementer(toBeDecremented) {
	
	intNumber = Number(toBeDecremented.innerHTML)

	intNumberDecremented = intNumber == 0 ? 9 : intNumber-1

	unit = intNumberDecremented

	toBeDecremented.innerHTML = unit
}

function dizaineSecondeDecrementer(toBeDecremented) {
	
	intNumber = Number(toBeDecremented.innerHTML)

	intNumberDecremented = intNumber == 0 ? 5 : intNumber-1

	unit = intNumberDecremented

	toBeDecremented.innerHTML = unit

}

function dizaineMinuteDecrementer(toBeDecremented) {
	
	intNumber = Number(toBeDecremented.innerHTML)

	intNumberDecremented = intNumber == 0 ? 5 : intNumber-1

	unit = intNumberDecremented

	toBeDecremented.innerHTML = unit
}

function compteur() {

	if (uniteSeconde.innerHTML <= "0" && !timeOver) { 

	setTimeout(function() {dizaineSecondeDecrementer(dizaineSeconde)}, 0)

		console.log('dizaine des secondes decrementer')
	}

	if (dizaineSeconde.innerHTML <= "0" && uniteSeconde.innerHTML <= "0" && !timeOver) { 
		
		uniteMinuteDecrementer(uniteMinute)

		console.log('uniter des minutes decrementer')
	}

	setTimeout(function() {uniteSecondeDecrementer(uniteSeconde)}, 0)

	if (uniteMinute.innerHTML <= "0" && dizaineSeconde.innerHTML <= "0" && uniteSeconde.innerHTML <= "0" && !timeOver) {
		
		dizaineMinuteDecrementer(dizaineMinute)

		console.log('dizaine des minutes decrementer')
	}

	if (uniteSeconde.innerHTML === "1" && dizaineSeconde.innerHTML === "0" && uniteMinute.innerHTML === "0" && dizaineMinute.innerHTML === "0" && !timeOver) {

		timeOver = true
		
		clearInterval(timer)

		console.log('isStarted: ', isStarted, ' timerOver: ', timeOver, ' pause: ', pause)

	}

}

function timerHandler() {

	if(!isStarted && !timeOver || pause) {

		timer = setInterval(compteur, 1000)

		isStarted = true

		pause = false

		console.log('isStarted: ', isStarted, ' timerOver: ', timeOver, ' pause: ', pause)

	}else if(!pause && isStarted && !timeOver){

		clearInterval(timer)

		pause = true

		console.log('pause: ', pause)
	}
}

function putBaliseToZero() {
	dizaineMinute.innerHTML = "0"
	uniteMinute.innerHTML = "0" 
	dizaineSeconde.innerHTML = "0"
	uniteSeconde.innerHTML = "0"
}

function resetTimer() {
	dizaineMinute.innerHTML = "2"
	uniteMinute.innerHTML = "5" 
	dizaineSeconde.innerHTML = "0"
	uniteSeconde.innerHTML = "0"

	clearInterval(timer)

	isStarted = false

	timeOver = false

	console.log('isStarted: ', isStarted, ' timerOver: ', timeOver)

}

function reloadTimer() {

	resetTimer()
	
}
/* Boutons a gerer */

playAndPause.addEventListener('click', timerHandler)

reset.addEventListener('click', reloadTimer)