Login / Sign up / Logout

    Public endpoints:

Homepage:

    Blog posts and read comments
    GET /api/posts
    GET /api/post/:id (includes all comments)

    "Cheer" for a post
    POST /api/post/:id/cheer

    "Cheer" for a comment
    POST /api/comment/:id/cheer

Authenticated endpoints:

Dashboard:

    GET /api/posts?user=user_id

    Create new blog post
    POST /api/post

    edit own post
    PUT /api/post/:id

    delete own post
    DELETE /api/post/:id

    write new comment
    POST /api/comment

    edit own comment
    PUT /api/comment/:id

    delete own comment
    DELETE /api/comment/:id

<!-- Authorized as moderator:

    edit any post
    delete any post

    edit any comment
    delete any comment
    delete/edit any user -->

Homepage

    /
    (Displays all the blog posts, navigation links to the homepage and the dashboard, and the option to log in/log out)

Sign up

    /signup
    (displays username, password and sign up button)

Log in

    /login
    (displays username, password, and log in button)

Blog post

    /post/:id
    (displays blog post title, contents, creator's username, date, comments and if signed in, ability to write a comment or edit own comments)

Dashboard

    /dashboard
    (displays all blog posts the user has created, and option to add a new post)

Create post

    /edit
    /edit/:id
    (title and contents fields, plus a publish button)
