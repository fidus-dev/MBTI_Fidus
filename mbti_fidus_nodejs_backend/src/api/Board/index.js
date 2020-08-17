const Router = require('koa-router');

const board = new Router();
const boardCtrl = require('./board.controller');

board.get('/', boardCtrl.getAll);

board.post('/', boardCtrl.create);

board.delete('/', boardCtrl.delete);

board.put('/:id', boardCtrl.replace);

board.patch('/:id', boardCtrl.update);

board.get('/:id', boardCtrl.get);

module.exports = board;