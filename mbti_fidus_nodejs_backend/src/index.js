require('dotenv').config();

const Koa = require('koa');
const cors = require('@koa/cors');
const koaBody = require('koa-body');
const logger = require('koa-logger');
const _router = require('./router');
const sequelize = require('./db/models').sequelize;

const port = process.env.PORT || 4000;

const run = async () => {
    const app = new Koa();
    const router = _router(_router);
    app.use(cors());
    app.use(logger);
    app.use(koaBody());
    app.use(router.routes()).use(router.allowedMethods());
    sequelize.sync();

    const server = await app.listen(port, () => {
        console.log('koa server is listening to port ' + port);
    });

    return server;
}

run();

