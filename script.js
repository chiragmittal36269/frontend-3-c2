// array which store the time
let timeArr = [];
let count = 0;

let hours = document.getElementById("hh");
let minutes = document.getElementById("mm");
let seconds = document.getElementById("ss");

let fourth = document.getElementsByClassName("third-section")[0];

console.log(timeArr);

document.getElementsByClassName("setTime")[0].addEventListener("click", () => {
	if (hours.value === "" && minutes.value === "" && seconds.value === "") {
		alert("Please enter the correct value");
		return;
	}

	if (hours.value > 24) {
		alert("please enter the value less than 24 hours");
		hours.value = "";
		hours.focus();
		return;
	}

	if (minutes.value > 60) {
		alert("please enter the value less than 60 hours");
		minutes.value = "";
		minutes.focus();
		return;
	}

	if (seconds.value > 60) {
		alert("please enter the value less than 60 hours");
		seconds.value = "";
		seconds.focus();
		return;
	}

	if (hours.value === "") {
		hours.value = 0;
	}

	if (minutes.value === "") {
		minutes.value = 0;
	}

	if (seconds.value === "") {
		seconds.value = 0;
	}

	//////////////////////////////////////

	let secondsRemaining = seconds.value;
	let minutesRemaining = minutes.value;
	let hoursRemaining = hours.value;
	// Set the initial number of seconds for the countdown

	// Function to update the timer display and handle the countdown logic
	let obj = {
		id: count,
		hours: hours.value,
		minutes: minutes.value,
		seconds: seconds.value,
	};

	hours.value = "";
	minutes.value = "";
	seconds.value = "";

	timeArr.push(obj);
	count++;

	console.log(timeArr);

	let div = document.createElement("div");
	div.className = "added-timers";

	fourth.appendChild(div);

	function updateTimer() {
		if (secondsRemaining > 0) {
			secondsRemaining--;
			// console.log(
			// 	`Time remaining: ${secondsRemaining} seconds`,
			// 	`minutes remaining: ${minutesRemaining}`,
			// 	`hours remaining: ${hoursRemaining}`
			// );

			div.innerHTML = `
				<div class="timeLeft">
					<p>Time Left:</p>
				</div>

				<div class="time">
					<input type="number" value="${hoursRemaining}" min="0" max="24" />
					<p>:</p>
					<input type="number" value="${minutesRemaining}" min="0" max="60" />
					<p>:</p>
					<input type="number" value="${secondsRemaining}" min="0" max="60" />
				</div>

				<button class="deleteTime" type="submit">Delete</button>
			`;
		} else if (minutesRemaining > 0) {
			minutesRemaining--;
			secondsRemaining = 60;
		} else if (hoursRemaining > 0) {
			hoursRemaining--;
			minutesRemaining = 59;
			secondsRemaining = 60;
		} else {
			clearInterval(intervalId); // Clear the interval when the countdown is finished
			console.log("Time's up!");
		}
	}

	// Start the countdown timer by calling the updateTimer function every second (1000 milliseconds)
	const intervalId = setInterval(updateTimer, 1000);

	////////////////////////////
});
