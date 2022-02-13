Login / Sign up / Logout

    Public endpoints:
    Blog posts and read comments
    "Clap" for a post
    "Clap" for a comment

Authenticated endpoints:

    Create new blog post
    edit own post
    delete own post

    write new comment
    edit own comment
    delete own comment

Authorized as moderator:

    edit any post
    delete any post

    edit any comment
    delete any comment
    delete/edit any user

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

    /blog/:id
    (displays blog post title, contents, creator's username, date, comments and if signed in, ability to write a comment or edit own comments)

Dashboard

    /dashboard
    (displays all blog posts the user has created, and option to add a new post)

Create post

    /create
    (title and contents fields, plus a publish button)
