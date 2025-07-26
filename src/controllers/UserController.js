const { TeamService } = require('../services/index');
const { Team } = require("../models/index");

class TeamController {
    // CREATE
    static createTeam = async (req, res) => {
        try {
            const team = await TeamService.create();
            res.status(201).json(team);
        } catch (error) {
            console.error('[TT BACKEND]', error);
            res.status(400).json({ error: error.message });
        }
    }

    // LIST ALL
    static findAllTeams = async (req, res) => {
        try {
            const team = await TeamService.findAll();
            res.status(200).json(team);
        } catch (error) {
            console.error('[TT BACKEND]', error);
            res.status(500).json({ error: error.message });
        }
    }

    // FIND BY ID
    static findTeam = async (req, res) => {
        const id = req.params.id;
        try {
            const team = await TeamService.findById(id);
            res.status(200).json(team);
        } catch (error) {
            console.error('[TT BACKEND]', error);
            res.status(500).json({ error: error.message });
        }
    }

    // UPDATE 
    static updateTeamById = async (req, res) => {
        const id = req.params.id;
        const { name, description, teamId } = req.body;

        try {
            const rows = await  TeamService.update(id, resolver);

            if (rows === 0)
                return res.status(200).json({ message: "No changes were made" });

            return res.status(200).json({ message: "Team updated" });
        } catch (error) {
            console.error("[TT BACKEND]", error);
            res.status(500).json({ error: error.message });
        }
    }

    // DELETE (id)
    static deleteTeamById = async (req, res) => {
        const id = req.params.id;

        try {
            const found = await TeamService.delete(id);

            if (found === 0) 
                return res.status(404).json({ error: "Team wasn't found"});
            
            res.status(204).json({ message: "Team deleted"});
        } catch (error) {
            console.error("[TT BACKEND]", error);
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = TeamController;