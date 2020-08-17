const Router = require('koa-router');
const board = require('./Board');

const api = new Router();

api.use('/Board', board.routes());

module.exports = api;

