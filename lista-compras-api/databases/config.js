const config = {

    "development": {
        db: "lista_compras_dev",
        user: "ifms",
        password: "ifms",
        host: "localhost",
        dialect: "postgres"
    },

    "test": {
        db: "lista_compras_test",
        user: "ifms",
        password: "ifms",
        host: "localhost",
        dialect: "postgres"
    }
};

module.exports = config;