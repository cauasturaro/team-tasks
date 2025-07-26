const { DataTypes, Sequelize} = require('sequelize');
const { sequelize } = require('../config/database')

const Project = sequelize.define('Project', {
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
    description: {
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
    },
}, {
    tableName: 'projects',
    timestamps: true
});

module.exports = Project