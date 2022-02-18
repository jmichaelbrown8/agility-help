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
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/signup', (req, res) => {
    res.render('signup');
});

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
        logged_in: req.session.logged_in
    });
});

module.exports = router;