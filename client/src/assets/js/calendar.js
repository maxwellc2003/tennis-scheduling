import moment from "moment";

const currentDate = moment();

function getMondayOfCurrentWeek(date) {
  let monday = date.startOf("isoweek");

  return monday.format("DD");
}

function getTuesdayOfCurrentWeek(date) {
  let monday = date.startOf("isoweek");

  let tuesday = moment(monday).add(1, "days");

  return tuesday.format("DD");
}

function getWednesdayOfCurrentWeek(date) {
  let monday = date.startOf("isoweek");

  let wednesday = moment(monday).add(2, "days");

  return wednesday.format("DD");
}

function getThursdayOfCurrentWeek(date) {
  let monday = date.startOf("isoweek");

  let thursday = moment(monday).add(3, "days");

  return thursday.format("DD");
}

function getFridayOfCurrentWeek(date) {
  let monday = date.startOf("isoweek");

  let friday = moment(monday).add(4, "days");

  return friday.format("DD");
}

function getSaturdayOfCurrentWeek(date) {
  let monday = date.startOf("isoweek");

  let saturday = moment(monday).add(5, "days");

  return saturday.format("DD");
}

function getSundayOfCurrentWeek(date) {
  let sunday = date.endOf("isoweek");

  return sunday.format("DD");
}

function displayCalendarWeek(date) {
  let monday = getMondayOfCurrentWeek(date);
  let sunday = getSundayOfCurrentWeek(date);

  let month1 = date.startOf("isoweek").format("MMM");
  let month2 = date.endOf("isoweek").format("MMM");

  let headerEl = document.getElementById("current-week-header");
  let footerEl = document.getElementById("current-week-footer");

  headerEl.textContent = month1 + " " + monday + "-" + month2 + " " + sunday;

  footerEl.textContent = month1 + " " + monday + "-" + month2 + " " + sunday;
}

function displayWeek(date) {
  document.getElementById("weekDay1").innerHTML = "";
  document.getElementById("weekDay2").innerHTML = "";
  document.getElementById("weekDay3").innerHTML = "";
  document.getElementById("weekDay4").innerHTML = "";
  document.getElementById("weekDay5").innerHTML = "";
  document.getElementById("weekDay6").innerHTML = "";
  document.getElementById("weekDay7").innerHTML = "";

  let monday = getMondayOfCurrentWeek(date);
  let tuesday = getTuesdayOfCurrentWeek(date);
  let wednesday = getWednesdayOfCurrentWeek(date);
  let thursday = getThursdayOfCurrentWeek(date);
  let friday = getFridayOfCurrentWeek(date);
  let saturday = getSaturdayOfCurrentWeek(date);
  let sunday = getSundayOfCurrentWeek(date);

  let day1SectionEl = document.getElementById("weekDay1");
  let day1El = document.createElement("h3");
  let dow1El = document.createElement("h2");
  let day2SectionEl = document.getElementById("weekDay2");
  let day2El = document.createElement("h3");
  let dow2El = document.createElement("h2");
  let day3SectionEl = document.getElementById("weekDay3");
  let day3El = document.createElement("h3");
  let dow3El = document.createElement("h2");
  let day4SectionEl = document.getElementById("weekDay4");
  let day4El = document.createElement("h3");
  let dow4El = document.createElement("h2");
  let day5SectionEl = document.getElementById("weekDay5");
  let day5El = document.createElement("h3");
  let dow5El = document.createElement("h2");
  let day6SectionEl = document.getElementById("weekDay6");
  let day6El = document.createElement("h3");
  let dow6El = document.createElement("h2");
  let day7SectionEl = document.getElementById("weekDay7");
  let day7El = document.createElement("h3");
  let dow7El = document.createElement("h2");

  day1El.textContent = monday;
  dow1El.textContent = "Mon";

  day2El.textContent = tuesday;
  dow2El.textContent = "Tue";

  day3El.textContent = wednesday;
  dow3El.textContent = "Wed";

  day4El.textContent = thursday;
  dow4El.textContent = "Thu";

  day5El.textContent = friday;
  dow5El.textContent = "Fri";

  day6El.textContent = saturday;
  dow6El.textContent = "Sat";

  day7El.textContent = sunday;
  dow7El.textContent = "Sun";

  day1SectionEl.appendChild(dow1El);
  day1SectionEl.appendChild(day1El);
  day2SectionEl.appendChild(dow2El);
  day2SectionEl.appendChild(day2El);
  day3SectionEl.appendChild(dow3El);
  day3SectionEl.appendChild(day3El);
  day4SectionEl.appendChild(dow4El);
  day4SectionEl.appendChild(day4El);
  day5SectionEl.appendChild(dow5El);
  day5SectionEl.appendChild(day5El);
  day6SectionEl.appendChild(dow6El);
  day6SectionEl.appendChild(day6El);
  day7SectionEl.appendChild(dow7El);
  day7SectionEl.appendChild(day7El);
}

async function renderCalendar(date, data, filter) {
  // displays the top and bottom banner dates
  await displayCalendarWeek(date);
  // displays the dates inside the calendar
  await displayWeek(date);
}

async function onStart(data) {
  await renderCalendar(currentDate, data);
}

async function jumpTo(event) {
  event.preventDefault();

  const month = document.getElementById("month").value.trim();
  const day = document.getElementById("day").value.trim();

  if (month && day) {
    currentDate.set("date", day);
    currentDate.set("month", month - 1);
    await renderCalendar(currentDate);
  }
}

async function filterCalendar(event) {
  event.preventDefault();

  let choice = document.getElementById("location").value.trim();

  await renderCalendar(currentDate, choice);
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function dropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
  document.getElementById("dropdownBtn").classList.toggle("dropbtn-focus");
}

function dropdown2() {
  document.getElementById("myDropdown2").classList.toggle("show2");
  document.getElementById("dropdownBtn2").classList.toggle("dropbtn-focus2");
}

function calendarLeft() {
  currentDate.subtract(7, "days");

  renderCalendar(currentDate);
}

function calendarRight() {
  currentDate.add(7, "days");

  renderCalendar(currentDate);
}

export default function initCalendar(data) {
  onStart(data);

  //Jump to event listener
  document.getElementById("jumpToBtn").addEventListener("click", jumpTo);

  //Filter calendar event listener
  document
    .getElementById("filterBtn")
    .addEventListener("click", filterCalendar);

  //Drop down event listeners
  document.getElementById("dropdownBtn2").addEventListener("click", dropdown2);
  document.getElementById("dropdownBtn").addEventListener("click", dropdown);

  //Calendar navigation
  document.getElementById("arrow-left").addEventListener("click", calendarLeft);
  document
    .getElementById("arrow-left1")
    .addEventListener("click", calendarLeft);
  document
    .getElementById("arrow-right")
    .addEventListener("click", calendarRight);
  document
    .getElementById("arrow-right1")
    .addEventListener("click", calendarRight);
}
