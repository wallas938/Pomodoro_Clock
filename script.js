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
var pause
var timer

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

	if (uniteSeconde.innerHTML <= "0" && !timeOver) {

		setTimeout(function () {
			dizaineSecondeDecrementer(dizaineSeconde)
		}, 0)

	}

	if (dizaineSeconde.innerHTML <= "0" && uniteSeconde.innerHTML <= "0" && !timeOver) {

		setTimeout(function () {
			uniteMinuteDecrementer(uniteMinute)
		}, 0)

	}


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

	if (!isStarted && !timeOver || pause) {

		timer = setInterval(compteur, 1000)

		isStarted = true

		pause = false

		console.log('isStarted: ', isStarted, ' timerOver: ', timeOver, ' pause: ', pause)

	} else if (!pause && isStarted && !timeOver) {

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

	clearInterval(timer)

	isStarted = false

	timeOver = false

	console.log('isStarted: ', isStarted, ' timerOver: ', timeOver)

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