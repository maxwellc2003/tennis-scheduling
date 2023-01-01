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
      let numberAttendingEl = document.createElement("p");
      let circleEl = document.createElement("div");

      if (filter != null) {
        if (data[i].eventLocation === filter) {
          timeEl.textContent = data[i].eventTime;
          cardEl.classList.add("card");
          numberAttendingEl.textContent = data[i].eventUsers.length;
          circleEl.classList.add("number-attending-icon");
          if (data[i].eventUsers.length >= data[i].eventMax) {
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
        timeEl.textContent = data[i].eventTime;
        cardEl.classList.add("card");
        numberAttendingEl.textContent = data[i].eventUsers.length;
        circleEl.classList.add("number-attending-icon");
        if (data[i].eventUsers.length >= data[i].eventMax) {
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
    if (data[i].eventDate === tuesday) {
      let containerEl = document.getElementById("eventContainer2");
      let cardEl = document.createElement("div");
      let timeEl = document.createElement("h5");
      let numberAttendingEl = document.createElement("p");
      let circleEl = document.createElement("div");

      if (filter != null) {
        if (data[i].eventLocation === filter) {
          timeEl.textContent = data[i].eventTime;
          cardEl.classList.add("card");
          numberAttendingEl.textContent = data[i].eventUsers.length;
          circleEl.classList.add("number-attending-icon");
          if (data[i].eventUsers.length >= data[i].eventMax) {
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
        timeEl.textContent = data[i].eventTime;
        cardEl.classList.add("card");
        numberAttendingEl.textContent = data[i].eventUsers.length;
        circleEl.classList.add("number-attending-icon");
        if (data[i].eventUsers.length >= data[i].eventMax) {
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
    if (data[i].eventDate === wednesday) {
      let containerEl = document.getElementById("eventContainer3");
      let cardEl = document.createElement("div");
      let timeEl = document.createElement("h5");
      let numberAttendingEl = document.createElement("p");
      let circleEl = document.createElement("div");

      if (filter != null) {
        if (data[i].eventLocation === filter) {
          timeEl.textContent = data[i].eventTime;
          cardEl.classList.add("card");
          numberAttendingEl.textContent = data[i].eventUsers.length;
          circleEl.classList.add("number-attending-icon");
          if (data[i].eventUsers.length >= data[i].eventMax) {
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
        timeEl.textContent = data[i].eventTime;
        cardEl.classList.add("card");
        numberAttendingEl.textContent = data[i].eventUsers.length;
        circleEl.classList.add("number-attending-icon");
        if (data[i].eventUsers.length >= data[i].eventMax) {
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
    if (data[i].eventDate === thursday) {
      let containerEl = document.getElementById("eventContainer4");
      let cardEl = document.createElement("div");
      let timeEl = document.createElement("h5");
      let numberAttendingEl = document.createElement("p");
      let circleEl = document.createElement("div");

      if (filter != null) {
        if (data[i].eventLocation === filter) {
          timeEl.textContent = data[i].eventTime;
          cardEl.classList.add("card");
          numberAttendingEl.textContent = data[i].eventUsers.length;
          circleEl.classList.add("number-attending-icon");
          if (data[i].eventUsers.length >= data[i].eventMax) {
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
        timeEl.textContent = data[i].eventTime;
        cardEl.classList.add("card");
        numberAttendingEl.textContent = data[i].eventUsers.length;
        circleEl.classList.add("number-attending-icon");
        if (data[i].eventUsers.length >= data[i].eventMax) {
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
    if (data[i].eventDate === friday) {
      let containerEl = document.getElementById("eventContainer5");
      let cardEl = document.createElement("div");
      let timeEl = document.createElement("h5");
      let numberAttendingEl = document.createElement("p");
      let circleEl = document.createElement("div");

      if (filter != null) {
        if (data[i].eventLocation === filter) {
          timeEl.textContent = data[i].eventTime;
          cardEl.classList.add("card");
          numberAttendingEl.textContent = data[i].eventUsers.length;
          circleEl.classList.add("number-attending-icon");
          if (data[i].eventUsers.length >= data[i].eventMax) {
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
        timeEl.textContent = data[i].eventTime;
        cardEl.classList.add("card");
        numberAttendingEl.textContent = data[i].eventUsers.length;
        circleEl.classList.add("number-attending-icon");
        if (data[i].eventUsers.length >= data[i].eventMax) {
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
    if (data[i].eventDate === saturday) {
      let containerEl = document.getElementById("eventContainer6");
      let cardEl = document.createElement("div");
      let timeEl = document.createElement("h5");
      let numberAttendingEl = document.createElement("p");
      let circleEl = document.createElement("div");

      if (filter != null) {
        if (data[i].eventLocation === filter) {
          timeEl.textContent = data[i].eventTime;
          cardEl.classList.add("card");
          numberAttendingEl.textContent = data[i].eventUsers.length;
          circleEl.classList.add("number-attending-icon");
          if (data[i].eventUsers.length >= data[i].eventMax) {
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
        timeEl.textContent = data[i].eventTime;
        cardEl.classList.add("card");
        numberAttendingEl.textContent = data[i].eventUsers.length;
        circleEl.classList.add("number-attending-icon");
        if (data[i].eventUsers.length >= data[i].eventMax) {
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
    if (data[i].eventDate === sunday) {
      let containerEl = document.getElementById("eventContainer7");
      let cardEl = document.createElement("div");
      let timeEl = document.createElement("h5");
      let numberAttendingEl = document.createElement("p");
      let circleEl = document.createElement("div");

      if (filter != null) {
        if (data[i].eventLocation === filter) {
          timeEl.textContent = data[i].eventTime;
          cardEl.classList.add("card");
          numberAttendingEl.textContent = data[i].eventUsers.length;
          circleEl.classList.add("number-attending-icon");
          if (data[i].eventUsers.length >= data[i].eventMax) {
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
        timeEl.textContent = data[i].eventTime;
        cardEl.classList.add("card");
        numberAttendingEl.textContent = data[i].eventUsers.length;
        circleEl.classList.add("number-attending-icon");
        if (data[i].eventUsers.length >= data[i].eventMax) {
          circleEl.classList.add("full-icon");
        }

        cardEl.onclick = function () {
          cardSelected(i, data);
        };

        containerEl.appendChild(cardEl);
        cardEl.appendChild(numberAttendingEl);
        cardEl.appendChild(circleEl);
        cardEl.appendChild(eventTimeEl);
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

await displayEventData(date, data, filter);

await loadFilterOptions(data);
