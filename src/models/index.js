const { sequelize } = require('../config/database');
const Task = require('./TaskModel');
const Project = require('./ProjectModel');
const Team = require('./TeamModel');
const User = require('./UserModel');

Project.hasMany(Task, { foreignKey: 'projectId', as: 'tasks' });
Team.hasMany(User, { foreignKey: 'teamId', as: 'users' });

Task.belongsTo(Project, { foreignKey: 'projectId', as: 'project' });
User.belongsTo(Team, { foreignKey: 'teamId', as: 'team' });

module.exports = {
    sequelize,
    Task,
    Project, 
    Team,
    User
};