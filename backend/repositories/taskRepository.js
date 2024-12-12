import dotenv from 'dotenv';

dotenv.config();

const getTask = async (id) => {
    console.log("Fetching task");
};

const getTasks = async () => {
    console.log("Fetching tasks");
};

const addTask = async (task) => {
    console.log("Creating task");
};

const deleteTask = async (id) => {
    console.log("Deleting task");
};

const taskRepository = {
    addTask,
    getTask,
    getTasks,
    deleteTask,
};

export default taskRepository;
