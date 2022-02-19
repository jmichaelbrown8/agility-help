const router = require('express').Router();
const {
    Article
} = require('../../models');

router.post('/', async (req, res) => {
    try {
        const articleData = await Article.create({
            ...req.body,
            user_id: req.session.user_id
        });

        const article = articleData.toJSON();

        res.status(200).json({
            message: `"${article.title}" published by ${req.session.username} at ${article.createdAt}`
        })
    } catch (err) {
        let message = 'Something went wrong.';

        if (!err.errors) {
            res.status(400).json({
                message,
                // ...err
            });
            return;
        }

        res.status(400).json({
            message,
            // ...err
        });
    }
});

module.exports = router;