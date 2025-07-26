const { Project } = require('../models/index');

class ProjectService {

    // CREATE
    static async create(data) {
        const project = await Project.create(data);
        return project;
    }

    // READ ALL
    static async findAll() {
        return await Project.findAll();
    }

    // READ BY ID
    static async findById(id) {
        return await Project.findByPk(id);
    }

    // UPDATE
    static async update(id, data) {
        const project = await this.findById(id);

        if (!project)
            throw new Error(`[TT BACKEND] Project with id ${id} was not found`);

        const [ rows ] = await Project.update(data, { where: { id }});
        return rows;
    }

    // DELETE
    static async delete(id) {
        const found  = await Project.delete({ where: { id }});
        return found;
    }
}

module.exports = ProjectService;