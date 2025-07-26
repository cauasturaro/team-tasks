const { Team, User } = require('../models/index');

class TeamService {

    // CREATE
    static async create() {
        const team = await Team.create({});
        return team;
    }

    // READ ALL
    static async findAll() {
        return await Team.findAll();
    }

    // READ BY ID
    static async findById(id) {
        return await Team.findByPk(id);
    }

    // LIST USERS IN TEAM
    static async listUsersInTeam(id) {
        const team = await this.findById(id);

        if (!team)
            throw new Error(`[TT BACKEND] Team with id ${id} was not found`);

        const users = await User.findAll({ where: { teamId: id }});
        return users;
    }

    // UPDATE
    static async update(id, data) {
        const team = await this.findById(id);

        if (!team)
            throw new Error(`[TT BACKEND] Team with id ${id} was not found`);

        const [ rows ] = await Team.update(data, { where: { id }});
        return rows;
    }

    // DELETE
    static async delete(id) {
        const found  = await Team.delete({ where: { id }});
        return found;
    }
}

module.exports = TeamService;