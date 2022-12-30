async function signupFormHandler(event) {
    event.preventDefault();
  
    const email = document.getElementById('input_1').value.trim();
    const username = document.getElementById('input_2').value.trim();
    const last_name = document.getElementById('input_3').value.trim();
    const utr = document.getElementById('input_4').value.trim();
    const password = document.getElementById('input_5').value.trim();
  
    if (email && username && password) {
      const response = await fetch('/api/users', {
        method: 'post',
        body: JSON.stringify({
          email,
          username,
          last_name,
          utr,
          password        
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        console.log('Signup Successful')
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
  }

document.getElementById('signup-button').addEventListener("click", signupFormHandler);