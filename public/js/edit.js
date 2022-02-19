const editFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#title').value.trim();
    const content = document.querySelector('#content').value;
    const path = window.location.pathname;

    if (title && content) {
        const response = await fetch('/api/article' + path, {
            method: 'PUT',
            body: JSON.stringify({
                title,
                content
            }),
            headers: {
                'Content-Type': 'application/json'
            },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to update the article.');
        }
    }
};

document
    .querySelector('.edit-form')
    .addEventListener('submit', editFormHandler);