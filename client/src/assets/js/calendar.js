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

async function renderCalendar(date, data, filter) {
  // displays the top and bottom banner dates
  await displayCalendarWeek(date);
  // displays the dates inside the calendar
  await displayWeek(date);
  // display calendar (hopefully lol)
  displayEventData(date, data, filter);

  await loadFilterOptions(data);
}

async function onStart(data) {
  await renderCalendar(currentDate, data);
}

// event data logic
function displayEventData(date, data, filter) {
  let eventContainer1El = document.getElementById("eventContainer1");
  let eventContainer2El = document.getElementById("eventContainer2");
  let eventContainer3El = document.getElementById("eventContainer3");
  let eventContainer4El = document.getElementById("eventContainer4");
  let eventContainer5El = document.getElementById("eventContainer5");
  let eventContainer6El = document.getElementById("eventContainer6");
  let eventContainer7El = document.getElementById("eventContainer7");

  while (eventContainer1El.firstChild) {
    eventContainer1El.removeChild(eventContainer1El.firstChild);
  }
  while (eventContainer2El.firstChild) {
    eventContainer2El.removeChild(eventContainer2El.firstChild);
  }
  while (eventContainer3El.firstChild) {
    eventContainer3El.removeChild(eventContainer3El.firstChild);
  }
  while (eventContainer4El.firstChild) {
    eventContainer4El.removeChild(eventContainer4El.firstChild);
  }
  while (eventContainer5El.firstChild) {
    eventContainer5El.removeChild(eventContainer5El.firstChild);
  }
  while (eventContainer6El.firstChild) {
    eventContainer6El.removeChild(eventContainer6El.firstChild);
  }
  while (eventContainer7El.firstChild) {
    eventContainer7El.removeChild(eventContainer7El.firstChild);
  }

  let length = data.length;
  let monday = date.startOf("isoweek").format("MM/DD/YY");
  let tuesday = date.startOf("isoweek").add(1, "days").format("MM/DD/YY");
  let wednesday = date.startOf("isoweek").add(2, "days").format("MM/DD/YY");
  let thursday = date.startOf("isoweek").add(3, "days").format("MM/DD/YY");
  let friday = date.startOf("isoweek").add(4, "days").format("MM/DD/YY");
  let saturday = date.startOf("isoweek").add(5, "days").format("MM/DD/YY");
  let sunday = date.startOf("isoweek").add(6, "days").format("MM/DD/YY");

  for (let i = 0; i < length; i++) {

    // MONDAY
    if (data[i].eventDate === monday) {
      let containerEl = document.getElementById("eventContainer1");
      let cardEl = document.createElement("div");
      let timeEl = document.createElement("h5");
      // let numberAttendingEl = document.createElement("p");
      let circleEl = document.createElement("div");

      if (filter != null) {
        if (data[i].eventLocation === filter) {
          timeEl.textContent = data[i].eventTime;
          cardEl.classList.add("card");
          // numberAttendingEl.textContent = data[i].eventUsers.length;
          // circleEl.classList.add("number-attending-icon");
          // if (data[i].eventUsers.length >= data[i].eventMax) {
            // circleEl.classList.add("full-icon");
          // }

          cardEl.onclick = function () {
            cardSelected(i, data);
          };

          containerEl.appendChild(cardEl);
          // cardEl.appendChild(numberAttendingEl);
          cardEl.appendChild(circleEl);
          cardEl.appendChild(timeEl);
        } else {
        }
      } else {
        timeEl.textContent = data[i].eventTime;
        cardEl.classList.add("card");
        // numberAttendingEl.textContent = data[i].eventUsers.length;
        // circleEl.classList.add("number-attending-icon");
        // if (data[i].eventUsers.length >= data[i].eventMax) {
          // circleEl.classList.add("full-icon");
        // }

        cardEl.onclick = function () {
          cardSelected(i, data);
        };

        containerEl.appendChild(cardEl);
        // cardEl.appendChild(numberAttendingEl);
        cardEl.appendChild(circleEl);
        cardEl.appendChild(timeEl);
      }
    }

    // TUESDAY
    if (data[i].eventDate === tuesday) {
      let containerEl = document.getElementById("eventContainer2");
      let cardEl = document.createElement("div");
      let timeEl = document.createElement("h5");
      // let numberAttendingEl = document.createElement("p");
      let circleEl = document.createElement("div");

      if (filter != null) {
        if (data[i].eventLocation === filter) {
          timeEl.textContent = data[i].eventTime;
          cardEl.classList.add("card");
          // numberAttendingEl.textContent = data[i].eventUsers.length;
          // circleEl.classList.add("number-attending-icon");
          // if (data[i].eventUsers.length >= data[i].eventMax) {
            // circleEl.classList.add("full-icon");
          // }

          cardEl.onclick = function () {
            cardSelected(i, data);
          };

          containerEl.appendChild(cardEl);
          // cardEl.appendChild(numberAttendingEl);
          cardEl.appendChild(circleEl);
          cardEl.appendChild(timeEl);
        } else {
        }
      } else {
        timeEl.textContent = data[i].eventTime;
        cardEl.classList.add("card");
        // numberAttendingEl.textContent = data[i].eventUsers.length;
        // circleEl.classList.add("number-attending-icon");
        // if (data[i].eventUsers.length >= data[i].eventMax) {
          // circleEl.classList.add("full-icon");
        // }

        cardEl.onclick = function () {
          cardSelected(i, data);
        };

        containerEl.appendChild(cardEl);
        // cardEl.appendChild(numberAttendingEl);
        cardEl.appendChild(circleEl);
        cardEl.appendChild(timeEl);
      }
    }

    // WEDNESDAY
    if (data[i].eventDate === wednesday) {
      let containerEl = document.getElementById("eventContainer3");
      let cardEl = document.createElement("div");
      let timeEl = document.createElement("h5");
      // let numberAttendingEl = document.createElement("p");
      let circleEl = document.createElement("div");

      if (filter != null) {
        if (data[i].eventLocation === filter) {
          timeEl.textContent = data[i].eventTime;
          cardEl.classList.add("card");
          // numberAttendingEl.textContent = data[i].eventUsers.length;
          // circleEl.classList.add("number-attending-icon");
          // if (data[i].eventUsers.length >= data[i].eventMax) {
            // circleEl.classList.add("full-icon");
          // }

          cardEl.onclick = function () {
            cardSelected(i, data);
          };

          containerEl.appendChild(cardEl);
          // cardEl.appendChild(numberAttendingEl);
          cardEl.appendChild(circleEl);
          cardEl.appendChild(timeEl);
        } else {
        }
      } else {
        timeEl.textContent = data[i].eventTime;
        cardEl.classList.add("card");
        // numberAttendingEl.textContent = data[i].eventUsers.length;
        // circleEl.classList.add("number-attending-icon");
        // if (data[i].eventUsers.length >= data[i].eventMax) {
          // circleEl.classList.add("full-icon");
        // }

        cardEl.onclick = function () {
          cardSelected(i, data);
        };

        containerEl.appendChild(cardEl);
        // cardEl.appendChild(numberAttendingEl);
        cardEl.appendChild(circleEl);
        cardEl.appendChild(timeEl);
      }
    }

    // THURSDAY
    if (data[i].eventDate === thursday) {
      let containerEl = document.getElementById("eventContainer4");
      let cardEl = document.createElement("div");
      let timeEl = document.createElement("h5");
      // let numberAttendingEl = document.createElement("p");
      let circleEl = document.createElement("div");

      if (filter != null) {
        if (data[i].eventLocation === filter) {
          timeEl.textContent = data[i].eventTime;
          cardEl.classList.add("card");
          // numberAttendingEl.textContent = data[i].eventUsers.length;
          // circleEl.classList.add("number-attending-icon");
          // if (data[i].eventUsers.length >= data[i].eventMax) {
            // circleEl.classList.add("full-icon");
          // }

          cardEl.onclick = function () {
            cardSelected(i, data);
          };

          containerEl.appendChild(cardEl);
          // cardEl.appendChild(numberAttendingEl);
          cardEl.appendChild(circleEl);
          cardEl.appendChild(timeEl);
        } else {
        }
      } else {
        timeEl.textContent = data[i].eventTime;
        cardEl.classList.add("card");
        // numberAttendingEl.textContent = data[i].eventUsers.length;
        // circleEl.classList.add("number-attending-icon");
        // if (data[i].eventUsers.length >= data[i].eventMax) {
          // circleEl.classList.add("full-icon");
        // }

        cardEl.onclick = function () {
          cardSelected(i, data);
        };

        containerEl.appendChild(cardEl);
        // cardEl.appendChild(numberAttendingEl);
        cardEl.appendChild(circleEl);
        cardEl.appendChild(timeEl);
      }
    }

    // FRIDAY
    if (data[i].eventDate === friday) {
      let containerEl = document.getElementById("eventContainer5");
      let cardEl = document.createElement("div");
      let timeEl = document.createElement("h5");
      // let numberAttendingEl = document.createElement("p");
      let circleEl = document.createElement("div");

      if (filter != null) {
        if (data[i].eventLocation === filter) {
          timeEl.textContent = data[i].eventTime;
          cardEl.classList.add("card");
          // numberAttendingEl.textContent = data[i].eventUsers.length;
          // circleEl.classList.add("number-attending-icon");
          // if (data[i].eventUsers.length >= data[i].eventMax) {
            // circleEl.classList.add("full-icon");
          // }

          cardEl.onclick = function () {
            cardSelected(i, data);
          };

          containerEl.appendChild(cardEl);
          // cardEl.appendChild(numberAttendingEl);
          cardEl.appendChild(circleEl);
          cardEl.appendChild(timeEl);
        } else {
        }
      } else {
        timeEl.textContent = data[i].eventTime;
        cardEl.classList.add("card");
        // numberAttendingEl.textContent = data[i].eventUsers.length;
        // circleEl.classList.add("number-attending-icon");
        // if (data[i].eventUsers.length >= data[i].eventMax) {
          // circleEl.classList.add("full-icon");
        // }

        cardEl.onclick = function () {
          cardSelected(i, data);
        };

        containerEl.appendChild(cardEl);
        // cardEl.appendChild(numberAttendingEl);
        cardEl.appendChild(circleEl);
        cardEl.appendChild(timeEl);
      }
    }

    // SATURDAY
    if (data[i].eventDate === saturday) {
      let containerEl = document.getElementById("eventContainer6");
      let cardEl = document.createElement("div");
      let timeEl = document.createElement("h5");
      // let numberAttendingEl = document.createElement("p");
      let circleEl = document.createElement("div");

      if (filter != null) {
        if (data[i].eventLocation === filter) {
          timeEl.textContent = data[i].eventTime;
          cardEl.classList.add("card");
          // numberAttendingEl.textContent = data[i].eventUsers.length;
          // circleEl.classList.add("number-attending-icon");
          // if (data[i].eventUsers.length >= data[i].eventMax) {
            // circleEl.classList.add("full-icon");
          // }

          cardEl.onclick = function () {
            cardSelected(i, data);
          };

          containerEl.appendChild(cardEl);
          // cardEl.appendChild(numberAttendingEl);
          cardEl.appendChild(circleEl);
          cardEl.appendChild(timeEl);
        } else {
        }
      } else {
        timeEl.textContent = data[i].eventTime;
        cardEl.classList.add("card");
        // numberAttendingEl.textContent = data[i].eventUsers.length;
        // circleEl.classList.add("number-attending-icon");
        // if (data[i].eventUsers.length >= data[i].eventMax) {
          // circleEl.classList.add("full-icon");
        // }

        cardEl.onclick = function () {
          cardSelected(i, data);
        };

        containerEl.appendChild(cardEl);
        // cardEl.appendChild(numberAttendingEl);
        cardEl.appendChild(circleEl);
        cardEl.appendChild(timeEl);
      }
    }

    // SUNDAY
    if (data[i].eventDate === sunday) {
      let containerEl = document.getElementById("eventContainer7");
      let cardEl = document.createElement("div");
      let timeEl = document.createElement("h5");
      // let numberAttendingEl = document.createElement("p");
      let circleEl = document.createElement("div");

      if (filter != null) {
        if (data[i].eventLocation === filter) {
          timeEl.textContent = data[i].eventTime;
          cardEl.classList.add("card");
          // numberAttendingEl.textContent = data[i].eventUsers.length;
          // circleEl.classList.add("number-attending-icon");
          // if (data[i].eventUsers.length >= data[i].eventMax) {
            // circleEl.classList.add("full-icon");
          // }

          cardEl.onclick = function () {
            cardSelected(i, data);
          };

          containerEl.appendChild(cardEl);
          // cardEl.appendChild(numberAttendingEl);
          cardEl.appendChild(circleEl);
          cardEl.appendChild(timeEl);
        } else {
        }
      } else {
        timeEl.textContent = data[i].eventTime;
        cardEl.classList.add("card");
        // numberAttendingEl.textContent = data[i].eventUsers.length;
        // circleEl.classList.add("number-attending-icon");
        // if (data[i].eventUsers.length >= data[i].eventMax) {
          // circleEl.classList.add("full-icon");
        // }

        cardEl.onclick = function () {
          cardSelected(i, data);
        };

        containerEl.appendChild(cardEl);
        // cardEl.appendChild(numberAttendingEl);
        cardEl.appendChild(circleEl);
        cardEl.appendChild(timeEl);
      }
    }
  }
}

function loadFilterOptions(data) {
  let containerEl = document.getElementById("location");

  while (containerEl.firstChild) {
    containerEl.removeChild(containerEl.firstChild);
  }

  const filterOptions = [];

  for (let i = 0; i < data.length; i++) {
    if (filterOptions.includes(data[i].eventLocation)) {
    } else {
      filterOptions.push(data[i].eventLocation);
    }
  }

  for (let i = 0; i < filterOptions.length; i++) {
    let optionEl = document.createElement("option");
    optionEl.value = filterOptions[i];
    optionEl.textContent = filterOptions[i];

    containerEl.appendChild(optionEl);
  }
}

function cardSelected(selected, data) {
  let parentEl = document.querySelector(".main-right");
  let containerEl = document.createElement("div");
  let eventInfoEl = document.createElement("div");

  //empty bucket
  if (parentEl.querySelector(".selected-event") !== null) {
    parentEl.removeChild(parentEl.lastChild);
  }

  containerEl.classList.add("selected-event");
  eventInfoEl.classList.add("event-info-container");

  // date info
  let dateContainerEl = document.createElement("div");
  dateContainerEl.classList.add("date-container");
  let dateLabelEl = document.createElement("h3");
  let dateEl = document.createElement("h4");
  dateEl.classList.add("date");

  dateLabelEl.textContent = "Date";
  dateEl.textContent = data[selected].eventDate;

  // location info
  let locationContainerEl = document.createElement("div");
  locationContainerEl.classList.add("location-container");
  let locationLabelEl = document.createElement("h3");
  let locationEl = document.createElement("h4");
  locationEl.classList.add("location");

  locationLabelEl.textContent = "Location";
  locationEl.textContent = data[selected].eventLocation;

  // time info
  let timeContainerEl = document.createElement("div");
  timeContainerEl.classList.add("time-container");
  let timeLabelEl = document.createElement("h3");
  let timeEl = document.createElement("h4");
  timeEl.classList.add("time");

  timeLabelEl.textContent = "Time";
  timeEl.textContent = data[selected].eventTime;

  //max-ppl players info
  let maxpplContainerEl = document.createElement("div");
  maxpplContainerEl.classList.add("max-ppl-container");
  let maxpplLabelEl = document.createElement("h3");
  let maxpplEl = document.createElement("h4");
  maxpplEl.classList.add("max-ppl");

  maxpplLabelEl.textContent = "Max Players Allowed";
  maxpplEl.textContent = data[selected].eventMax;

  // parent appends
  parentEl.appendChild(containerEl);
  containerEl.appendChild(eventInfoEl);
  // date appends
  eventInfoEl.appendChild(dateContainerEl);
  dateContainerEl.appendChild(dateLabelEl);
  dateContainerEl.appendChild(dateEl);
  //location appends
  eventInfoEl.appendChild(locationContainerEl);
  locationContainerEl.appendChild(locationLabelEl);
  locationContainerEl.appendChild(locationEl);
  // time appends
  eventInfoEl.appendChild(timeContainerEl);
  timeContainerEl.appendChild(timeLabelEl);
  timeContainerEl.appendChild(timeEl);
  // maxppl appends
  eventInfoEl.appendChild(maxpplContainerEl);
  maxpplContainerEl.appendChild(maxpplLabelEl);
  maxpplContainerEl.appendChild(maxpplEl);
}
