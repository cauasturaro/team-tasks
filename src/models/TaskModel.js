const { DataTypes, Sequelize} = require('sequelize');
const { sequelize } = require('../config/database')

const Task = sequelize.define('Task', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    column: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    projectId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'projects',
            key: 'id'
        },
        allowNull: false
    }
}, {
    tableName: 'tasks',
    timestamps: true
});

module.exports = Task;