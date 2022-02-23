const logout = async () => {
  const response = await fetch('/api/user/logout', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
  });

  if (response.ok) {
    localStorage.setItem('toast', 'You are now logged out.');
    document.location.replace('/');
  } else {
    localStorage.setItem('toast', 'Failed to log out.');
    toastIt();
  }
};

document.querySelector('#logout').addEventListener('click', logout);