const sequelize = require('../config/connection');
const {
    User,
    Comment,
    Article
} = require('../models');

const userData = require('./userData.json');
const articleData = require('./articleData.json');
const commentData = require('./commentData.json');

const seedDatabase = async () => {
    await sequelize.sync({
        force: true
    });

    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    const articles = await Article.bulkCreate(articleData);
    const comments = await Comment.bulkCreate(commentData);

    // for (const article of articleData) {
    //     await Article.create(article);
    // }

    process.exit(0);
};

seedDatabase();