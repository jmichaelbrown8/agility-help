// get toast value and Toastify it if it exists
const toastIt = () => {
    const toast = localStorage.getItem('toast');

    if (toast) {
        Toastify({
            text: toast,
            duration: 3000,
            close: true,
            gravity: "top",
            position: "right",
            stopOnFocus: true,
        }).showToast();

        localStorage.removeItem('toast');
    }
};

toastIt();

// Start a 1 second loop to check for a toast localStorage item
setInterval(toastIt, 1000);