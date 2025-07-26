const { DataTypes, Sequelize} = require('sequelize');
const { sequelize } = require('../config/database')

const Team = sequelize.define('Team', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
}, {
    tableName: 'teams',
    timestamps: true
});

module.exports = Team