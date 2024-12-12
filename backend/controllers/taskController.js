import { addTask, getTask, getTasks, deleteTask } from "../repositories/taskRepository.js";

async function getTask(req, res) {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).send('[WARNING] ID is required.');
        }
        const { jsonResponse, httpStatusCode } = await getTask(id);
        res.status(httpStatusCode).json(jsonResponse);
    } catch (error) {
        console.error("[ERROR] Error fetching task:", error);
        res.status(500).json({ error: "Error fetching task" });
    }
}

async function getTasks(req, res) {
    try {
        const { jsonResponse, httpStatusCode } = await getTasks();
        res.status(httpStatusCode).json(jsonResponse);
    } catch (error) {
        console.error("[ERROR] Error fetching tasks:", error);
        res.status(500).json({ error: "Error fetching tasks" });
    }
}

async function addTask(req, res) {
    try {
        const { title, description } = req.body;

        if (!title || !description) {
            return res.status(400).send('[WARNING] Title and description are required.');
        }

        const { jsonResponse, httpStatusCode } = await addTask({ title, description });
        res.status(httpStatusCode).json(jsonResponse);
    } catch (error) {
        console.error("[ERROR] Error creating task:", error);
        res.status(500).json({ error: "Error creating task" });
    }
}

async function deleteTask(req, res) {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).send('[WARNING] ID is required.');
        }
        const { jsonResponse, httpStatusCode } = await deleteTask(id);
        res.status(httpStatusCode).json(jsonResponse);
    } catch (error) {
        console.error("[ERROR] Error creating task:", error);
        res.status(500).json({ error: "Error deleting task" });
    }
}

module.exports = {
    getTask,
    getTasks,
    addTask,
    deleteTask
};