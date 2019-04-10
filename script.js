var timer = document.getElementById('timer')
var sessionLength = document.getElementById('sessionLength')
var breakLength = document.getElementById('breakLength')
var dizaineMinute = document.getElementById('dizaine-minute')
var uniteMinute = document.getElementById('unite-minute')
var dizaineSeconde = document.getElementById('dizaine-seconde')
var uniteSeconde = document.getElementById('unite-seconde')
var playAndPause = document.getElementById('pause-play')
var reset = document.getElementById('reset')
var arrowUpForBreak = document.getElementById('breakIncrementer')
var arrowDownForBreak = document.getElementById('breakDecrementer')
var arrowUpForTimer = document.getElementById('sessionIncrementer')
var arrowDownForTimer = document.getElementById('sessionDecrementer')
var isStarted = false
var timeOver = false
var sessionPause = false
var breakPause = false
var timer
var isBreakTriggered

function incrementer(toBeIncremented) {

	intNumber = Number(toBeIncremented.innerHTML)

	intNumberincremented = intNumber >= 99 ? 99 : intNumber + 1

	unit = intNumberincremented

	toBeIncremented.innerHTML = unit
}

function decrementer(toBeDecremented) {

	intNumber = Number(toBeDecremented.innerHTML)

	intNumberDecremented = intNumber <= 1 ? 1 : intNumber - 1

	unit = intNumberDecremented

	toBeDecremented.innerHTML = unit
}

function timerInitialisation() {
	dizaineMinute.innerHTML = !sessionLength.innerHTML[1] ? "0" : sessionLength.innerHTML[0]
	uniteMinute.innerHTML = !sessionLength.innerHTML[1] ? sessionLength.innerHTML[0] : sessionLength.innerHTML[1]
	dizaineSeconde.innerHTML = "0"
	uniteSeconde.innerHTML = "0"

	resetTimer()
}
//Recuperation du temps de Pause dans le DOM et implémenter breakInit
function breakInitialisation() {
	
	dizaineMinute.innerHTML = !breakLength.innerHTML[1] ? "0" : breakLength.innerHTML[0]
	uniteMinute.innerHTML = !breakLength.innerHTML[1] ? breakLength.innerHTML[0] : breakLength.innerHTML[1]
	dizaineSeconde.innerHTML = "0"
	uniteSeconde.innerHTML = "0"

	console.log('Temps de Pause LANCE...')

	timerHandler()
} 

function uniteSecondeDecrementer(toBeDecremented) {

	intNumber = Number(toBeDecremented.innerHTML)

	intNumberDecremented = intNumber == 0 ? 9 : intNumber - 1

	unit = intNumberDecremented

	toBeDecremented.innerHTML = unit

}

function uniteMinuteDecrementer(toBeDecremented) {

	intNumber = Number(toBeDecremented.innerHTML)

	intNumberDecremented = intNumber == 0 ? 9 : intNumber - 1

	unit = intNumberDecremented

	toBeDecremented.innerHTML = unit

}

function dizaineSecondeDecrementer(toBeDecremented) {

	intNumber = Number(toBeDecremented.innerHTML)

	intNumberDecremented = intNumber == 0 ? 5 : intNumber - 1

	unit = intNumberDecremented

	toBeDecremented.innerHTML = unit

}

function dizaineMinuteDecrementer(toBeDecremented) {

	intNumber = Number(toBeDecremented.innerHTML)

	intNumberDecremented = intNumber == 0 ? 5 : intNumber - 1

	unit = intNumberDecremented

	toBeDecremented.innerHTML = unit
}

function compteur() {

	setTimeout(function () {
		uniteSecondeDecrementer(uniteSeconde)
	}, 0)

	if (uniteSeconde.innerHTML <= "0" && !timeOver || uniteSeconde.innerHTML <= "0" && isBreakTriggered) {

		setTimeout(function () {
			dizaineSecondeDecrementer(dizaineSeconde)
		}, 0)

	}

	if (dizaineSeconde.innerHTML <= "0" && uniteSeconde.innerHTML <= "0" && !timeOver || dizaineSeconde.innerHTML <= "0" && uniteSeconde.innerHTML <= "0" && isBreakTriggered) {

		setTimeout(function () {
			uniteMinuteDecrementer(uniteMinute)
		}, 0)

	}


	if (uniteMinute.innerHTML <= "0" && dizaineSeconde.innerHTML <= "0" && uniteSeconde.innerHTML <= "0" && !timeOver || uniteMinute.innerHTML <= "0" && dizaineSeconde.innerHTML <= "0" && uniteSeconde.innerHTML <= "0" && isBreakTriggered) {

		dizaineMinuteDecrementer(dizaineMinute)

		console.log('dizaine des minutes decrementer')
	}

	if (uniteSeconde.innerHTML === "1" && dizaineSeconde.innerHTML === "0" && uniteMinute.innerHTML === "0" && dizaineMinute.innerHTML === "0" && !timeOver) {

		clearInterval(timer)

		console.log('Démarrage du Temps de PAUSE...')

		setTimeout( function() {

			timeOver = true
			
			isBreakTriggered = true

			breakInitialisation()
			
			console.log('isStarted: ', isStarted, ' timerOver: ', timeOver, ' sessionPause: ', sessionPause, ' isBreakTriggered: ', isBreakTriggered)

		}, 

		5000)
	}

	if (uniteSeconde.innerHTML === "1" && dizaineSeconde.innerHTML === "0" && uniteMinute.innerHTML === "0" && dizaineMinute.innerHTML === "0" && isBreakTriggered) {

		clearInterval(timer)

		console.log('Démarrage du Temps de SESSION...')

		setTimeout( function() {

			timerInitialisation()
			
			timerHandler()
		
			console.log('isStarted: ', isStarted, ' timerOver: ', timeOver, ' sessionPause: ', sessionPause, ' isBreakTriggered: ', isBreakTriggered)

		}, 

		5000)
	}

}

function timerHandler() {

	if (!isStarted && !timeOver && !isBreakTriggered || isStarted && sessionPause) { // Demarrage de la session

		timer = setInterval(compteur, 1000)

		isStarted = true

		sessionPause = false

		//console.log('SESSION')

		//console.log('isStarted: ', isStarted, ' timerOver: ', timeOver, ' sessionPause: ', sessionPause, ' isBreakTriggered: ', isBreakTriggered, ' breakPause: ', breakPause)

	}else if (isStarted && timeOver && isBreakTriggered || breakPause) { // Demarrage de la pause

		breakPause = false

		timeOver = false

		timer = setInterval(compteur, 1000)

		//console.log('BREAK')

		//console.log('isStarted: ', isStarted, ' timerOver: ', timeOver, ' sessionPause: ', sessionPause, ' isBreakTriggered: ', isBreakTriggered, ' breakPause: ', breakPause)

	}else if (!sessionPause || !breakPause) { // Mise en pause

		if(isStarted && !timeOver && !isBreakTriggered) { sessionPause = true }

		else { breakPause = true }
		

		clearInterval(timer)

		//console.log('PAUSE')

		//console.log('isStarted: ', isStarted, ' timerOver: ', timeOver, ' sessionPause: ', sessionPause, ' isBreakTriggered: ', isBreakTriggered, ' breakPause: ', breakPause)

	} 
}

function resetTimer() {

	clearInterval(timer)

	isStarted = false

	timeOver = false

	isBreakTriggered = false

	sessionPause = false

	console.log('isStarted: ', isStarted, ' timerOver: ', timeOver, ' sessionPause: ', sessionPause, ' isBreakTriggered: ', isBreakTriggered)

}

function reloadTimer() {

	timerInitialisation()

}
/* Boutons a gerer */

document.addEventListener('DOMContentLoaded', function () {

	timerInitialisation()

	playAndPause.addEventListener('click', timerHandler)

	reset.addEventListener('click', reloadTimer)

	arrowUpForTimer.addEventListener('click', function () {

		incrementer(sessionLength)

		timerInitialisation()
	})

	arrowDownForTimer.addEventListener('click', function () {

		decrementer(sessionLength)

		timerInitialisation()
	})

	arrowUpForBreak.addEventListener('click', function () {

		incrementer(breakLength)
		
	})

	arrowDownForBreak.addEventListener('click', function () {

		decrementer(breakLength)

	})
})