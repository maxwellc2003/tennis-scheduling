async function logout() {
  const response = await fetch('/api/users/logout', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' }
  });

  if (response.ok) {
    console.log('Logged Out Successfully')
    document.location.reload();
  } else {
    alert(response.statusText);
  }
}

document.getElementById('logout-button').addEventListener("click", logout);
