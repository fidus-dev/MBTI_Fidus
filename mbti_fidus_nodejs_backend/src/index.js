require('dotenv').config();

const Koa = require('koa');
const cors = require('@koa/cors');
const koaBody = require('koa-body');
const logger = require('koa-logger');
const Router = require('koa-router');
const sequelize = require('./db/models').sequelize;
const api = require('./api');

const port = process.env.PORT || 4000;

const run = async () => {
    const app = new Koa();
    const router = new Router();
    router.use('/api', api.routes());
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

