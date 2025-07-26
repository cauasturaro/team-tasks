const { ProjectService } = require('../services/index');
const { Project } = require("../models/index");

class ProjectController {
    // CREATE
    static createProject = async (req, res) => {
        const { name, description, teamId } = req.body;

        try {
            const project = await ProjectService.create({ name, description, teamId });
            res.status(201).json(project);
        } catch (error) {
            console.error('[TT BACKEND]', error);
            res.status(400).json({ error: error.message });
        }
    }

    // LIST ALL
    static findAllProjects = async (req, res) => {
        try {
            const project = await ProjectService.findAll();
            res.status(200).json(project);
        } catch (error) {
            console.error('[TT BACKEND]', error);
            res.status(500).json({ error: error.message });
        }
    }

    // FIND BY ID
    static findProject = async (req, res) => {
        const id = req.params.id;
        try {
            const project = await ProjectService.findById(id);
            res.status(200).json(project);
        } catch (error) {
            console.error('[TT BACKEND]', error);
            res.status(500).json({ error: error.message });
        }
    }

    // UPDATE 
    static updateProjectById = async (req, res) => {
        const id = req.params.id;
        const { name, description, teamId } = req.body;

        try {
            const rows = await  ProjectService.update(id, { name, description, teamId });

            if (rows === 0)
                return res.status(200).json({ message: "No changes were made" });

            return res.status(200).json({ message: "Project updated" });
        } catch (error) {
            console.error("[TT BACKEND]", error);
            res.status(500).json({ error: error.message });
        }
    }

    // DELETE (id)
    static deleteTaskById = async (req, res) => {
        const id = req.params.id;

        try {
            const found = await ProjectService.delete(id);

            if (found === 0) 
                return res.status(404).json({ error: "Project wasn't found"});
            
            res.status(204).json({ message: "Project deleted"});
        } catch (error) {
            console.error("[TT BACKEND]", error);
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = ProjectController;