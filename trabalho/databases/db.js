const Sequelize = require('sequelize');

const dbConfig = require('./config');
const Model = require('../models/Model');
const ItemModel = require('../models/ItemModel');

const modo = process.env.NODE_ENV || 'development';
const config = dbConfig[modo];

const conexao = new Sequelize(
    config.db,
    config.user,
    config.password, {
    host: config.host,
    dialect: config.dialect
}
);

const item = ItemModel(conexao, Sequelize);
const trabalho = Model(conexao, Sequelize);
conexao.sync({ alter: true })
    .then(() => console.log('BD Conectado e sincronizado!'));
const db = { trabalho, item };

module.exports = db;
