const editFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#title').value.trim();
    const content = document.querySelector('#content').value;
    const id = window.location.pathname.split('/').pop();

    if (title && content) {
        const response = await fetch('/api/article/' + id, {
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

const deleteFormHandler = async (event) => {
    event.preventDefault();

    const id = window.location.pathname.split('/').pop();

    if (id) {
        const response = await fetch('/api/article/' + id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to delete the article.');
        }
    }
};

document
    .querySelector('.edit-form')
    .addEventListener('submit', editFormHandler);

document
    .querySelector('#delete-button')
    .addEventListener('click', deleteFormHandler);