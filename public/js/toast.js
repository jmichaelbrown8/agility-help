// const toast is defined before arriving here.
if (toast) {
    Toastify({
        text: toast,
        duration: 3000,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
    }).showToast();
}