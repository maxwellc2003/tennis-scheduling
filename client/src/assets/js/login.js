async function loginFormHandler(event) {
  

  event.preventDefault();

  const email = document.getElementById('email-login').value.trim();
  const password = document.getElementById('password-login').value.trim();

  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'post',
      body: JSON.stringify({
        email,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      console.log('Login Successful', response)
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
}

function registerPage() {
  document.location.replace('/signup');
}


document.getElementById('login-button').addEventListener("click", loginFormHandler);

document.getElementById('register-button').addEventListener("click", registerPage);

// const input = document.getElementById('email-login')

// input.addEventListener("keypress", function(event) {
//   // If the user presses the "Enter" key on the keyboard
//   if (event.key === "Enter") {
//     // Cancel the default action, if needed
//     event.preventDefault();
//     // Trigger the button element with a click
//     document.getElementById("login-button").click();
//   }
// });