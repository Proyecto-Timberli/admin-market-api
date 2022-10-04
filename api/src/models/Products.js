const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

    sequelize.define('product', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        make: {
            type: DataTypes.STRING,
            allowNull: true
        },       
        amount: {
            type: DataTypes.STRING,
            allowNull: true
        },
        price: {
            type: DataTypes.FLOAT,     
            allowNull: true,
        },
        buyprice: {
            type: DataTypes.FLOAT,    
            allowNull: true,
        },
        stock: {
            type: DataTypes.INTEGER,     
            allowNull: true,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        image: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: true,
            defaultValue: ["https://avalos.sv/wp-content/uploads/default-featured-image.png"]
        },
    });
};