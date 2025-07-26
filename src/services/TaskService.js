const { Task, Project } = require('../models/index');

class TaskService {

    // CREATE
    static async create(data) {
        const { projectId } = data;

        const project = await Project.findByPk(projectId);

        if (!project)
            throw new Error(`[TT BACKEND] Project with id ${projectId} was not found`);

        const task = await Task.create(data);
        return task;
    }

    // READ ALL
    static async findAll() {
        return await Task.findAll();
    }

    // READ BY ID
    static async findById(id) {
        return await Task.findByPk(id);
    }

    // UPDATE
    static async update(id, data) {
        const { projectId } = data;

        const project = await Project.findByPk(projectId);

        if (!project)
            throw new Error(`[TT BACKEND] Project with id ${projectId} was not found`);

        const task = await this.findById(id);

        if (!task)
            throw new Error(`[TT BACKEND] Project with id ${id} was not found`);

        const [ rows ] = await Task.update(data, { where: { id }});
        return rows;
    }

    // DELETE
    static async delete(id) {
        const found  = await task.delete({ where: { id }});
        return found;
    }
}

module.exports = TaskService;