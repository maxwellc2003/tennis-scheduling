import moment from 'moment';

const currentDate = moment();

// const currentDateTest = new Date().toLocaleDateString();

// function splitDate(date) {
//   let text = date;

//   let month = text.slice(0, 2);
//   let day = text.slice(3, 5);
//   let year = text.slice(6, 10);

//   return month, day, year;
// }

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

async function getEventData() {
  var events = [];

  try {
    const res = await fetch("api/events", {
      method: "GET",
    });
    events = await res.json();
  } catch(e) {
    
  }

  // await fetch("api/events", {
  //   method: "GET",
  // })
  //   .then((response) => {
  //     if (response.ok) {
  //       return response.json();
  //     }
  //   })
  //   .then((postResponse) => {
  //     events = postResponse;
  //   });

  return events;
}

function displayEventData(date, data, filter) {
  while (eventContainer1.firstChild) {
    eventContainer1.removeChild(eventContainer1.firstChild);
  }
  while (eventContainer2.firstChild) {
    eventContainer2.removeChild(eventContainer2.firstChild);
  }
  while (eventContainer3.firstChild) {
    eventContainer3.removeChild(eventContainer3.firstChild);
  }
  while (eventContainer4.firstChild) {
    eventContainer4.removeChild(eventContainer4.firstChild);
  }
  while (eventContainer5.firstChild) {
    eventContainer5.removeChild(eventContainer5.firstChild);
  }
  while (eventContainer6.firstChild) {
    eventContainer6.removeChild(eventContainer6.firstChild);
  }
  while (eventContainer7.firstChild) {
    eventContainer7.removeChild(eventContainer7.firstChild);
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
    if (data[i].date == monday) {
      let containerEl = document.getElementById("eventContainer1");
      let cardEl = document.createElement("div");
      let timeEl = document.createElement("h5");
      let numberAttendingEl = document.createElement("p");
      let circleEl = document.createElement("div");

      if (data[i].event_users.length >= data[i].max_players) {
        cardEl.classList.add("full-session");
      }

      if (filter != null) {
        if (data[i].location == filter) {
          timeEl.textContent = data[i].time;
          cardEl.classList.add("card");
          numberAttendingEl.textContent = data[i].event_users.length;
          circleEl.classList.add("number-attending-icon");
          if (data[i].event_users.length >= data[i].max_players) {
            circleEl.classList.add("full-icon");
          }

          cardEl.onclick = function () {
            cardSelected(i, data);
          };

          containerEl.appendChild(cardEl);
          cardEl.appendChild(numberAttendingEl);
          cardEl.appendChild(circleEl);
          cardEl.appendChild(timeEl);
        } else {
        }
      } else {
        timeEl.textContent = data[i].time;
        cardEl.classList.add("card");
        numberAttendingEl.textContent = data[i].event_users.length;
        circleEl.classList.add("number-attending-icon");
        if (data[i].event_users.length >= data[i].max_players) {
          circleEl.classList.add("full-icon");
        }

        cardEl.onclick = function () {
          cardSelected(i, data);
        };

        containerEl.appendChild(cardEl);
        cardEl.appendChild(numberAttendingEl);
        cardEl.appendChild(circleEl);
        cardEl.appendChild(timeEl);
      }
    }

    // TUESDAY
    if (data[i].date == tuesday) {
      let containerEl = document.getElementById("eventContainer2");
      let cardEl = document.createElement("div");
      let timeEl = document.createElement("h5");
      let numberAttendingEl = document.createElement("p");
      let circleEl = document.createElement("div");

      if (data[i].event_users.length >= data[i].max_players) {
        cardEl.classList.add("full-session");
      }

      if (filter != null) {
        if (data[i].location == filter) {
          timeEl.textContent = data[i].time;
          cardEl.classList.add("card");
          numberAttendingEl.textContent = data[i].event_users.length;
          circleEl.classList.add("number-attending-icon");
          if (data[i].event_users.length >= data[i].max_players) {
            circleEl.classList.add("full-icon");
          }

          cardEl.onclick = function () {
            cardSelected(i, data);
          };

          containerEl.appendChild(cardEl);
          cardEl.appendChild(numberAttendingEl);
          cardEl.appendChild(circleEl);
          cardEl.appendChild(timeEl);
        } else {
        }
      } else {
        timeEl.textContent = data[i].time;
        cardEl.classList.add("card");
        numberAttendingEl.textContent = data[i].event_users.length;
        circleEl.classList.add("number-attending-icon");
        if (data[i].event_users.length >= data[i].max_players) {
          circleEl.classList.add("full-icon");
        }

        cardEl.onclick = function () {
          cardSelected(i, data);
        };

        containerEl.appendChild(cardEl);
        cardEl.appendChild(numberAttendingEl);
        cardEl.appendChild(circleEl);
        cardEl.appendChild(timeEl);
      }
    }

    // WEDNESDAY
    if (data[i].date == wednesday) {
      let containerEl = document.getElementById("eventContainer3");
      let cardEl = document.createElement("div");
      let timeEl = document.createElement("h5");
      let numberAttendingEl = document.createElement("p");
      let circleEl = document.createElement("div");

      if (data[i].event_users.length >= data[i].max_players) {
        cardEl.classList.add("full-session");
      }

      if (filter != null) {
        if (data[i].location == filter) {
          timeEl.textContent = data[i].time;
          cardEl.classList.add("card");
          numberAttendingEl.textContent = data[i].event_users.length;
          circleEl.classList.add("number-attending-icon");
          if (data[i].event_users.length >= data[i].max_players) {
            circleEl.classList.add("full-icon");
          }

          cardEl.onclick = function () {
            cardSelected(i, data);
          };

          containerEl.appendChild(cardEl);
          cardEl.appendChild(numberAttendingEl);
          cardEl.appendChild(circleEl);
          cardEl.appendChild(timeEl);
        } else {
        }
      } else {
        timeEl.textContent = data[i].time;
        cardEl.classList.add("card");
        numberAttendingEl.textContent = data[i].event_users.length;
        circleEl.classList.add("number-attending-icon");
        if (data[i].event_users.length >= data[i].max_players) {
          circleEl.classList.add("full-icon");
        }

        cardEl.onclick = function () {
          cardSelected(i, data);
        };

        containerEl.appendChild(cardEl);
        cardEl.appendChild(numberAttendingEl);
        cardEl.appendChild(circleEl);
        cardEl.appendChild(timeEl);
      }
    }

    // THURSDAY
    if (data[i].date == thursday) {
      let containerEl = document.getElementById("eventContainer4");
      let cardEl = document.createElement("div");
      let timeEl = document.createElement("h5");
      let numberAttendingEl = document.createElement("p");
      let circleEl = document.createElement("div");

      if (data[i].event_users.length >= data[i].max_players) {
        cardEl.classList.add("full-session");
      }

      if (filter != null) {
        if (data[i].location == filter) {
          timeEl.textContent = data[i].time;
          cardEl.classList.add("card");
          numberAttendingEl.textContent = data[i].event_users.length;
          circleEl.classList.add("number-attending-icon");
          if (data[i].event_users.length >= data[i].max_players) {
            circleEl.classList.add("full-icon");
          }

          cardEl.onclick = function () {
            cardSelected(i, data);
          };

          containerEl.appendChild(cardEl);
          cardEl.appendChild(numberAttendingEl);
          cardEl.appendChild(circleEl);
          cardEl.appendChild(timeEl);
        } else {
        }
      } else {
        timeEl.textContent = data[i].time;
        cardEl.classList.add("card");
        numberAttendingEl.textContent = data[i].event_users.length;
        circleEl.classList.add("number-attending-icon");
        if (data[i].event_users.length >= data[i].max_players) {
          circleEl.classList.add("full-icon");
        }

        cardEl.onclick = function () {
          cardSelected(i, data);
        };

        containerEl.appendChild(cardEl);
        cardEl.appendChild(numberAttendingEl);
        cardEl.appendChild(circleEl);
        cardEl.appendChild(timeEl);
      }
    }

    // FRIDAY
    if (data[i].date == friday) {
      let containerEl = document.getElementById("eventContainer5");
      let cardEl = document.createElement("div");
      let timeEl = document.createElement("h5");
      let numberAttendingEl = document.createElement("p");
      let circleEl = document.createElement("div");

      if (data[i].event_users.length >= data[i].max_players) {
        cardEl.classList.add("full-session");
      }

      if (filter != null) {
        if (data[i].location == filter) {
          timeEl.textContent = data[i].time;
          cardEl.classList.add("card");
          numberAttendingEl.textContent = data[i].event_users.length;
          circleEl.classList.add("number-attending-icon");
          if (data[i].event_users.length >= data[i].max_players) {
            circleEl.classList.add("full-icon");
          }

          cardEl.onclick = function () {
            cardSelected(i, data);
          };

          containerEl.appendChild(cardEl);
          cardEl.appendChild(numberAttendingEl);
          cardEl.appendChild(circleEl);
          cardEl.appendChild(timeEl);
        } else {
        }
      } else {
        timeEl.textContent = data[i].time;
        cardEl.classList.add("card");
        numberAttendingEl.textContent = data[i].event_users.length;
        circleEl.classList.add("number-attending-icon");
        if (data[i].event_users.length >= data[i].max_players) {
          circleEl.classList.add("full-icon");
        }

        cardEl.onclick = function () {
          cardSelected(i, data);
        };

        containerEl.appendChild(cardEl);
        cardEl.appendChild(numberAttendingEl);
        cardEl.appendChild(circleEl);
        cardEl.appendChild(timeEl);
      }
    }

    // SATURDAY
    if (data[i].date == saturday) {
      let containerEl = document.getElementById("eventContainer6");
      let cardEl = document.createElement("div");
      let timeEl = document.createElement("h5");
      let numberAttendingEl = document.createElement("p");
      let circleEl = document.createElement("div");

      if (data[i].event_users.length >= data[i].max_players) {
        cardEl.classList.add("full-session");
      }

      if (filter != null) {
        if (data[i].location == filter) {
          timeEl.textContent = data[i].time;
          cardEl.classList.add("card");
          numberAttendingEl.textContent = data[i].event_users.length;
          circleEl.classList.add("number-attending-icon");
          if (data[i].event_users.length >= data[i].max_players) {
            circleEl.classList.add("full-icon");
          }

          cardEl.onclick = function () {
            cardSelected(i, data);
          };

          containerEl.appendChild(cardEl);
          cardEl.appendChild(numberAttendingEl);
          cardEl.appendChild(circleEl);
          cardEl.appendChild(timeEl);
        } else {
        }
      } else {
        timeEl.textContent = data[i].time;
        cardEl.classList.add("card");
        numberAttendingEl.textContent = data[i].event_users.length;
        circleEl.classList.add("number-attending-icon");
        if (data[i].event_users.length >= data[i].max_players) {
          circleEl.classList.add("full-icon");
        }

        cardEl.onclick = function () {
          cardSelected(i, data);
        };

        containerEl.appendChild(cardEl);
        cardEl.appendChild(numberAttendingEl);
        cardEl.appendChild(circleEl);
        cardEl.appendChild(timeEl);
      }
    }

    // SUNDAY
    if (data[i].date == sunday) {
      let containerEl = document.getElementById("eventContainer7");
      let cardEl = document.createElement("div");
      let timeEl = document.createElement("h5");
      let numberAttendingEl = document.createElement("p");
      let circleEl = document.createElement("div");

      if (data[i].event_users.length >= data[i].max_players) {
        cardEl.classList.add("full-session");
      }

      if (filter != null) {
        if (data[i].location == filter) {
          timeEl.textContent = data[i].time;
          cardEl.classList.add("card");
          numberAttendingEl.textContent = data[i].event_users.length;
          circleEl.classList.add("number-attending-icon");
          if (data[i].event_users.length >= data[i].max_players) {
            circleEl.classList.add("full-icon");
          }

          cardEl.onclick = function () {
            cardSelected(i, data);
          };

          containerEl.appendChild(cardEl);
          cardEl.appendChild(numberAttendingEl);
          cardEl.appendChild(circleEl);
          cardEl.appendChild(timeEl);
        } else {
        }
      } else {
        timeEl.textContent = data[i].time;
        cardEl.classList.add("card");
        numberAttendingEl.textContent = data[i].event_users.length;
        circleEl.classList.add("number-attending-icon");
        if (data[i].event_users.length >= data[i].max_players) {
          circleEl.classList.add("full-icon");
        }

        cardEl.onclick = function () {
          cardSelected(i, data);
        };

        containerEl.appendChild(cardEl);
        cardEl.appendChild(numberAttendingEl);
        cardEl.appendChild(circleEl);
        cardEl.appendChild(timeEl);
      }
    }
  }
}

async function renderCalendar(date, filter) {
  // displays the top and bottom banner dates
  await displayCalendarWeek(date);
  // displays the dates inside the calendar
  await displayWeek(date);
  // fetches the api data and then calls to a module to load it
  const events = await getEventData();
  // displays the eventdata
  await displayEventData(date, events, filter);
  // loads the filter options
  await loadFilterOptions(events);
}

async function onStart() {
  await renderCalendar(currentDate);
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

function loadFilterOptions(data) {
  let containerEl = document.getElementById("location");

  while (containerEl.firstChild) {
    containerEl.removeChild(containerEl.firstChild);
  }

  const filterOptions = [];

  for (let i = 0; i < data.length; i++) {
    if (filterOptions.includes(data[i].location)) {
    } else {
      filterOptions.push(data[i].location);
    }
  }

  for (let i = 0; i < filterOptions.length; i++) {
    let optionEl = document.createElement("option");
    optionEl.value = filterOptions[i];
    optionEl.textContent = filterOptions[i];

    containerEl.appendChild(optionEl);
  }
}

async function filterCalendar(event) {
  event.preventDefault();

  let choice = document.getElementById("location").value.trim();

  await renderCalendar(currentDate, choice);
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
  dateEl.textContent = data[selected].date;

  // location info
  let locationContainerEl = document.createElement("div");
  locationContainerEl.classList.add("location-container");
  let locationLabelEl = document.createElement("h3");
  let locationEl = document.createElement("h4");
  locationEl.classList.add("location");

  locationLabelEl.textContent = "Location";
  locationEl.textContent = data[selected].location;

  // time info
  let timeContainerEl = document.createElement("div");
  timeContainerEl.classList.add("time-container");
  let timeLabelEl = document.createElement("h3");
  let timeEl = document.createElement("h4");
  timeEl.classList.add("time");

  timeLabelEl.textContent = "Time";
  timeEl.textContent = data[selected].time;

  //max-ppl players info
  let maxpplContainerEl = document.createElement("div");
  maxpplContainerEl.classList.add("max-ppl-container");
  let maxpplLabelEl = document.createElement("h3");
  let maxpplEl = document.createElement("h4");
  maxpplEl.classList.add("max-ppl");

  maxpplLabelEl.textContent = "Max Players Allowed";
  maxpplEl.textContent = data[selected].max_players;

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

// Close the dropdown menu if the user clicks outside of it
// window.onclick = function(event) {
//   if ((!event.target.matches('.dropbtn'))) {
//     const dropdowns = document.getElementsByClassName("dropdown-content");
//     for (i = 0; i < dropdowns.length; i++) {
//       const openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.toggle('show');
//       }
//     }
//   }
// }

function calendarLeft() {
  currentDate.subtract(7, "days");

  renderCalendar(currentDate);
}

function calendarRight() {
  currentDate.add(7, "days");

  renderCalendar(currentDate);
}

export default function initCalendar() {
  onStart();

  //Jump to event listener
  document.getElementById("jumpToBtn").addEventListener("click", jumpTo);
  
  //Filter calendar event listener
  document.getElementById("filterBtn").addEventListener("click", filterCalendar);
  
  //Drop down event listeners
  document.getElementById("dropdownBtn2").addEventListener("click", dropdown2);
  document.getElementById("dropdownBtn").addEventListener("click", dropdown);
  
  //Calendar navigation
  document.getElementById("arrow-left").addEventListener("click", calendarLeft);
  document.getElementById("arrow-left1").addEventListener("click", calendarLeft);
  document.getElementById("arrow-right").addEventListener("click", calendarRight);
  document
    .getElementById("arrow-right1")
    .addEventListener("click", calendarRight);
}
