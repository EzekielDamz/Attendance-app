const theDate = document.querySelector(".cur-date");
const Time = document.querySelector(".Time-In");
const Time1 = document.querySelector(".Time-In-1");
const checkIn = document.querySelector(".In-btn");
const checkIn1 = document.querySelector(".In-btn-1");
const TimeOut = document.querySelector(".Time-out");
const checkOut = document.querySelector(".Out-btn");
const checkOut1 = document.querySelector(".Out-btn-1");
const TimeOut1 = document.querySelector(".Time-out-1");
const newDay = document.querySelector(".new-day");

//Hide the time by creating a function

// Add evenlistener to the new day button

newDay.addEventListener("click", newday);

function newday() {
  Time.style.display = "none";
  Time1.style.display = "none";
  TimeOut.style.display = "none";
  TimeOut1.style.display = "none";
  checkIn.style.display = "block";
  checkIn1.style.display = "block";
  checkOut.style.display = "block";
  checkOut1.style.display = "block";
  localStorage.clear();
}
//newday();
// Create a new Date object

const date = new Date();

//Set the year and month

date.getFullYear();
date.getMonth();
date.getDate();

const day = String(date.getDate()).padStart(2, "0");

//Get the day of the week and convert it to a string

const dayOfTheWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const dayOfWeek = dayOfTheWeek[date.getDay()];

//Get the month and convert it to a string
const getCurrentMonth = [
  "January",
  "Febuary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const currentMonth = getCurrentMonth[date.getMonth()];
// Get the year
const year = date.getFullYear();

//console.log(`${day} ${currentMonth} ${year}`);

//Get the hour, minute and seconds
theDate.textContent = `${day} / ${currentMonth} / ${year}`;

// TIME IN CODE
checkIn.addEventListener("click", function () {
  Timein();
  checkIn.style.display = "none";
  
});
function Timein() {
  const date = new Date();
  const currentTimein = date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });
  const newTimein = "Time : " + currentTimein;
  Time.textContent = newTimein;
  Time.style.display = "block";

  //event.preventDefault();
}
function saveTimein() {
  const currentTimein = date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });
  const newTimein = "Time : " + currentTimein;
  Time.textContent = newTimein;
  localStorage.setItem("Time", newTimein);
}

// TIME OUT CODE

checkOut.addEventListener("click", function () {
  checkout();
  checkOut.style.display = "none";
});
function checkout() {
  const date = new Date();
  const currentTime = date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });
  const newTime = "Time : " + currentTime;
  TimeOut.textContent = newTime;
  TimeOut.style.display = "block";
}

// SECOND TIME IN CODE

checkIn1.addEventListener("click", function () {
  Timein1();
  checkIn1.style.display = "none";
});

function Timein1() {
  const date = new Date();
  const currentTime = date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });
  const newTime1 = "Time : " + currentTime;
  Time1.textContent = newTime1;
  Time1.style.display = "block";
}

//  SECOND TIME OUT CODE

checkOut1.addEventListener("click", function () {
  checkout1();
  checkOut1.style.display = "none";
  saveData();
});

function checkout1() {
  const date = new Date();
  const currentTime = date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });
  //const newTimeOut = "Time : " + currentTime;
  TimeOut1.textContent = currentTime;
  TimeOut1.style.display = "block";
}

function saveData() {
  const currentTime = date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });
  const newTimeOut = "Time : " + currentTime;
  TimeOut1.textContent = newTimeOut;
  localStorage.setItem("Data", newTimeOut);
  console.log(localStorage.getItem("Data"));
}
TimeOut1.textContent = localStorage.getItem("Data");
//Time.textContent = localStorage.getItem("Time");


