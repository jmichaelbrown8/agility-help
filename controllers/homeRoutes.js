const router = require('express').Router();
const {
    Article,
    User,
    Comment
} = require('../models');
const withAuth = require('../utils/auth');

// GET all articles for homepage
router.get('/', async (req, res) => {
    try {
        const articleData = await Article.findAll({
            include: [{
                model: User,
                attributes: [
                    'username'
                ]
            }]
        });

        const articles = articleData.map(article => article.toJSON());

        res.render('homepage', {
            articles,
            logged_in: req.session.logged_in,
            username: req.session.username,
            toast: req.query.toast,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Get one article
router.get('/article/:id', async (req, res) => {
    try {
        const articleData = await Article.findByPk(req.params.id, {
            include: [{
                model: User,
                attributes: [
                    'username',
                    'id'
                ]
            }, {
                model: Comment,
                include: {
                    model: User,
                    attributes: [
                        'username',
                        'id'
                    ]
                }
            }]
        });

        const article = articleData.toJSON();

        res.render('article', {
            article,
            logged_in: req.session.logged_in,
            username: req.session.username,
            toast: req.query.toast,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    res.render('login', {
        toast: req.query.toast,
    });
});

router.get('/signup', (req, res) => {
    res.render('signup', {
        toast: req.query.toast,
    });
});

// dashboard page with logged in user's articles
router.get('/dashboard', withAuth, async (req, res) => {

    const articlesData = await Article.findAll({
        where: {
            user_id: req.session.user_id
        }
    });
    const articles = articlesData.map(article => article.toJSON());
    res.render('dashboard', {
        articles,
        user_id: req.session.user_id,
        username: req.session.username,
        logged_in: req.session.logged_in,
        toast: req.query.toast,
    });
});

// create page for a new post
router.get('/create', withAuth, (req, res) => {

    res.render('create', {
        user_id: req.session.user_id,
        username: req.session.username,
        logged_in: req.session.logged_in,
        toast: req.query.toast,
    });
});

// edit page for an existing post
router.get('/edit/:id', withAuth, async (req, res) => {

    const articleData = await Article.findByPk(req.params.id);
    const article = articleData.toJSON();
    article.content = article.content.replaceAll('<br />', '\n');

    // check if this user was the author first
    if (req.session.user_id !== article.user_id) {
        res.render('unauthorized', {
            logged_in: req.session.logged_in,
            toast: req.query.toast,
        });
    }

    res.render('edit', {
        article,
        user_id: req.session.user_id,
        username: req.session.username,
        logged_in: req.session.logged_in
    });
});

module.exports = router;