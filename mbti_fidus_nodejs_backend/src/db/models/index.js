const path = require('path');
const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require(path.join(__dirname, '..', 'config', 'config.json'))[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config)

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Board = require('./Board')(sequelize, Sequelize);
db.Article = require('./Article')(sequelize, Sequelize);
db.Comment = require('./Comment')(sequelize, Sequelize);

db.Board.hasMany(db.Article, {foreignKey: 'board_id', sourceKey: 'id'});
db.Article.belongsTo(db.Board, {foreignKey: 'board_id', targetKey: 'id'});

db.Article.hasMany(db.Comment, {foreignKey: 'article_id', sourceKey: 'id'});
db.Comment.belongsTo(db.Article, {foreignKey: 'article_id', targetKey: 'id'});


module.exports = db;
