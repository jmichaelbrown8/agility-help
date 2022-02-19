const commentFormHandler = async (event) => {
    event.preventDefault();
    const content = document.querySelector('#comment').value;
    const article_id = parseInt(document.querySelector('#article_id').value);

    if (content) {
        const response = await fetch('/api/comment', {
            method: 'POST',
            body: JSON.stringify({
                content,
                article_id
            }),
            headers: {
                'Content-Type': 'application/json'
            },
        });

        if (response.ok) {
            document.location.search = '?toast=Added comment.';
        } else {
            document.location.search = '?toast=Failed to add comment.';
        }
    }
};

document
    .querySelector('#comment-form')
    .addEventListener('submit', commentFormHandler);