import taskRepository from "../repositories/taskRepository.js";

export async function getTask(req, res) {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).send('[WARNING] ID is required.');
        }
        const { jsonResponse, httpStatusCode } = await taskRepository.getTask(id);
        res.status(httpStatusCode).json(jsonResponse);
    } catch (error) {
        console.error("[ERROR] Error fetching task:", error);
        res.status(500).json({ error: "Error fetching task" });
    }
}

export async function getTasks(req, res) {
    try {
        const { jsonResponse, httpStatusCode } = await taskRepository.getTasks();
        res.status(httpStatusCode).json(jsonResponse);
    } catch (error) {
        console.error("[ERROR] Error fetching tasks:", error);
        res.status(500).json({ error: "Error fetching tasks" });
    }
}

export async function addTask(req, res) {
    try {
        const { title, description } = req.body;

        if (!title || !description) {
            return res.status(400).send('[WARNING] Title and description are required.');
        }

        const { jsonResponse, httpStatusCode } = await taskRepository.addTask({ title, description });
        res.status(httpStatusCode).json(jsonResponse);
    } catch (error) {
        console.error("[ERROR] Error creating task:", error);
        res.status(500).json({ error: "Error creating task" });
    }
}

export async function deleteTask(req, res) {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).send('[WARNING] ID is required.');
        }
        const { jsonResponse, httpStatusCode } = await taskRepository.deleteTask(id);
        res.status(httpStatusCode).json(jsonResponse);
    } catch (error) {
        console.error("[ERROR] Error deleting task:", error);
        res.status(500).json({ error: "Error deleting task" });
    }
}
