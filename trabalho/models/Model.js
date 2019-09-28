const Model = (sequelize, DataTypes) => {
    const trabalho = sequelize.define('trabalho', {
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {});
    return trabalho;
};
module.exports = Model;