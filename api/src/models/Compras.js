const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

    sequelize.define('compra', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        total: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        resumen: {
            type: DataTypes.JSON,
            allowNull: true
        },       
       
    });
};