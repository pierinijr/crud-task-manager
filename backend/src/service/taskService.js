const taskModel = require('../models/taskModel');
const { validateTask, validateIdExists } = require('../helpers/validateTask');

const getAllTasks = async (userId) => {
  const tasks = await taskModel.getAll(userId);
  return tasks;
};

const createNewTask = async ({ tag, task, status, userId }) => {
  const validate = await validateTask({ task, status });

  if (validate !== null) return { erroCode: validate };
  
  const create = await taskModel.create({ tag, task, status, userId });
  return create;
};

const deleteTask = async (id) => {
  const validate = await validateIdExists(id);
  if (validate !== null) return { erroCode: validate };

  const exclude = await recipesModel.exclude(id);
  return exclude;
};

module.exports = {
  getAllTasks,
  createNewTask,
  deleteTask
};