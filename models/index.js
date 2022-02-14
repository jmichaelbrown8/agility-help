const User = require('./User');
const Article = require('./Article');
const Comment = require('./Comment');

Article.belongsTo(User, {
    foreignKey: 'user_id'
});

Comment.belongsTo(Article, {
    foreignKey: 'article_id'
});
Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = {
    User,
    Comment,
    Article
};