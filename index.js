// Selectors

let theHourSelect = document.getElementById("hours");
let theMinuteSelect = document.getElementById("minutes");
let theAmPmSelect = document.getElementById("am-pm");
let hoursDate = document.querySelector(".hours");
let minutesDate = document.querySelector(".minutes");
let secondsDate = document.querySelector(".seconds");
let amPmOption = document.querySelector(".am-pm");
let theBtn = document.querySelector(".theBtn");
let theSelectors = document.querySelector(".selctors");
let isClicked = false;
let timeGlobal;
let myAudio = new Audio("quran.mp3")

// GetHour

const getHours = () => {
  for (let i = 1; i <= 12; i++) {
    let hour = i < 10 ? "0" + i : i;
    let theOptionHour = `<option value="${hour}">${hour}</option>`;
    theHourSelect.insertAdjacentHTML("beforeend", theOptionHour);
  }
};

//GetMinutes
function getMinutes() {
  for (let i = 1; i <= 60; i++) {
    let minute = i < 10 ? "0" + i : i;
    let theOptionMinute = `<option value="${minute}">${minute}</option>`;
    theMinuteSelect.insertAdjacentHTML("beforeend", theOptionMinute);
  }
}

// Get am/pm

const getAmPm = () => {
  for (let i = 1; i <= 2; i++) {
    let AmPm = i === 1 ? "AM" : "PM";
    let theOptionAmPm = `<option value="${AmPm}">${AmPm}</option>`;
    theAmPmSelect.insertAdjacentHTML("beforeend", theOptionAmPm);
  }
};

// GetTime

let theInterval = setInterval(() => {
  let theHours = new Date().getHours();
  let apm = "AM"
  if (theHours > 12) {
    theHours = theHours - 12
    apm = "PM"
  }
  theHours = theHours < 10 ? "0" + theHours : theHours;
  hoursDate.innerHTML = `${theHours} :`
  // Get Minute
  let theMinute = new Date().getMinutes();
  theMinute = theMinute < 10 ? "0" + theMinute : theMinute;
  minutesDate.innerHTML = `${theMinute} :`
  // Get Seconds
  let theSeconds = new Date().getSeconds();
  theSeconds = theSeconds < 10 ? "0" + theSeconds : theSeconds;
  secondsDate.innerHTML = theSeconds;
  amPmOption.innerHTML = apm;
  if (timeGlobal === `${theHours}:${theMinute}:${apm}`) {
    myAudio.play();
    myAudio.loop = true;
  }
}, 1000);

// Function AddAlarm

const addAlarm = () => {
  // Check 
  if (isClicked) {
    myAudio.pause();
    theBtn.innerHTML = "😗 شغلني ياعم";
    theSelectors.classList.remove("hidden");
    timeGlobal = "";
    return;
  }
  // Get value of Select
  let hourValue = theHourSelect.value;
  let minuteValue = theMinuteSelect.value;
  let AmPm = theAmPmSelect.value;
  timeGlobal = `${hourValue}:${minuteValue}:${AmPm}`;
  // Check
  if (hourValue.includes("Hours") || minuteValue.includes("Minutes") || AmPm.includes("AM/PM")) {
    alert("!! اكتب ياعم وقت ولا انا هصحيك بمزاجي  😡 ")
  } else {
    isClicked = true;
    theBtn.innerHTML = ` 🥺  اصحا ياعم انا تعبت `;
    theSelectors.classList.add("hidden")
  }
}

// Trigger Function's
getHours();
getMinutes();
getAmPm();
theBtn.addEventListener("click", addAlarm)

