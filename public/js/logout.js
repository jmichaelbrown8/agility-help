const logout = async () => {
  const response = await fetch('/api/user/logout', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
  });

  if (response.ok) {
    document.location.replace('/?toast=You are now logged out');
  } else {
    document.location.search = 'toast=Failed to log out.';
  }
};

document.querySelector('#logout').addEventListener('click', logout);