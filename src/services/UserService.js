const { User } = require('../models/index');

class UserSerivce {

    // CREATE
    static async create(data) {
        const user = await User.create(data);
        return user;
    }

    // READ ALL
    static async findAll() {
        return await User.findAll();
    }

    // READ BY ID
    static async findById(id) {
        return await User.findByPk(id);
    }

    // UPDATE
    static async update(id, data) {
        const user = await this.findById(id);

        if (!project)
            throw new Error(`[TT BACKEND] User with id ${id} was not found`);

        const [ rows ] = await User.update(data, { where: { id }});
        return rows;
    }

    // DELETE
    static async delete(id) {
        const found  = await User.delete({ where: { id }});
        return found;
    }
}

module.exports = UserService;