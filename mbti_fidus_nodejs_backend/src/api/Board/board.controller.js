const Board = require('../../db/models').Board;

exports.get = async (ctx) => {
    const { id } = ctx.params;

    let board;

    try {
        board = await Board.findOne({
            where: {
                id: id
            }
        })
    } catch (e) {
        if (e.name === 'CastError') {
            ctx.status = 400;
            return;
        }
        return ctx.throw(500, e);
    }

    if (!board) {
        ctx.status = 404;
        ctx.body = {
            message: 'There is no board for the requested ID'
        }
        return;
    }

    ctx.body = board;
}

exports.getAll = async (ctx) => {

    let boards;

    try {
        boards = await Board.findAll();
    } catch (e) {
        if (e.name === 'CastError') {
            ctx.status = 400;
            return;
        }
        return ctx.throw(500, e);
    }

    if (!boards) {
        ctx.status = 404;
        ctx.body = {
            message: 'There is no board'
        }
        return;
    }

    ctx.body = boards;
}

exports.create = async (ctx) => {
    const { name } = ctx.request.body;

    const board;

    if (!name) {
        ctx.status = 404;
        ctx.body = {
            message: 'there is no parameter: name'
        }
        return;
    }

    try {
        board = await Board.create({ name });
    } catch (e) {
        return ctx.throw(500, e);
    }

    if (!board) {
        ctx.status = 404;
        ctx.body = {
            message: 'unable to create the board with inserted name'
        }
        return;
    }
    ctx.body = book;
};

exports.delete = async (ctx) => {
    const { name } = ctx.params;

    if (!name) {
        ctx.status = 404;
        ctx.body = {
            message: 'there is no parameter: name'
        }
        return;
    }

    const deletedBoard;

    try {
        deletedBoard = await Board.destroy({
            where: {
                name: name
            }
        });
        ctx.status = 204;

    } catch (e) {
        if (e.name === 'CastError') {
            ctx.status = 400;
            return;
        }
    }
};

exports.replace = async (ctx) => {
    const { name } = ctx.params;

    let board;

    try {
        board = await Board.update({
            name: name
        })
    } catch (e) {
        return ctx.throw(500, e);
    }
    ctx.body = book;
};

exports.update = async (ctx) => {
    const { name } = ctx.params;

    let board;

    try {
        board = await Board.update({
            name: name
        })
    } catch (e) {
        return ctx.throw(500, e);
    }
    ctx.body = book;
};