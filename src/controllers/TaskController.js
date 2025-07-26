const { TaskService } = require('../services/index');
const { Task } = require("../models/index");

class TaskController {
    // CREATE
    static createTask = async (req, res) => {
        const { column, title, description, projectId } = req.body;

        try {
            const task = await TaskService.create({ column, title, description, projectId });
            res.status(201).json(task);
        } catch (error) {
            console.error('[TT BACKEND]', error);
            res.status(400).json({ error: error.message });
        }
    }

    // LIST ALL
    static findAllTasks = async (req, res) => {
        try {
            const tasks = await TaskService.findAll();
            res.status(200).json(tasks);
        } catch (error) {
            console.error('[TT BACKEND]', error);
            res.status(500).json({ error: error.message });
        }
    }

    // FIND BY ID
    static findTask = async (req, res) => {
        const id = req.params.id;
        try {
            const task = await TaskService.findById(id);
            res.status(200).json(task);
        } catch (error) {
            console.error('[TT BACKEND]', error);
            res.status(500).json({ error: error.message });
        }
    }

    // UPDATE 
    static updateTaskById = async (req, res) => {
        const id = req.params.id;
        const { column, title, description, projectId } = req.body;

        try {
            const rows = await TaskService.update(id, { column, title, description, projectId });

            if (rows === 0)
                return res.status(200).json({ message: "No changes were made" });

            return res.status(200).json({ message: "Task updated" });
        } catch (error) {
            console.error("[TT BACKEND]", error);
            res.status(500).json({ error: error.message });
        }
    }

    // DELETE (id)
    static deleteTaskById = async (req, res) => {
        const id = req.params.id;

        try {
            const found = await TaskService.delete(id);

            if (found === 0) 
                return res.status(404).json({ error: "Task wasn't found"});
            
            res.status(204).json({ message: "Task deleted"});
        } catch (error) {
            console.error("[TT BACKEND]", error);
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = TaskController;