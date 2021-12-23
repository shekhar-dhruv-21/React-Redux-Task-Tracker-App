const taskReducer = (tasks = [], action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [...tasks, action.payload];
    case "GET_TASKS":
      return action.payload;
    case "DELETE_TASKS":
      return tasks.filter((task) => task.id !== action.id);
    case "TOGGLE_REMIND":
      return tasks.map((task) =>
        task.id === action.id
          ? { ...task, reminder: action.data.reminder }
          : task
      );
    case "FEATCH_TASK":
      return action.payload;
    default:
      return tasks;
  }
};
export default taskReducer;
