const { DataTypes, Sequelize} = require('sequelize');
const { sequelize } = require('../config/database')

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    teamId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'teams',
            key: 'id'
        },
        allowNull: false
    }
}, {
    tableName: 'users',
    timestamps: true
});

module.exports = User