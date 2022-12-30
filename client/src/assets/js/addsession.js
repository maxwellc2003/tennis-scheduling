async function addSession(event) {
  event.preventDefault();

  const date = document.getElementById("date_input").value.trim();
  const location = document.getElementById("location_input").value.trim();
  const time = document.getElementById("time_input").value.trim();
  const max_players = document.getElementById("max_players_input").value.trim();

  if (date && location && time && max_players) {
    const response = await fetch("/api/events", {
      method: "post",
      body: JSON.stringify({
        date,
        location,
        time,
        max_players,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      console.log("Event Added Successfully");
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
}

document
  .getElementById("add-session-button")
  .addEventListener("click", addSession);
