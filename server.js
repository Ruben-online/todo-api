const express = require("express");

const app = express();

app.disable("x-powered-by");

const PORT = process.env.PORT || 3000;

app.use(express.json());

let tasks = [
  {
    id: 1,
    title: "Aprender Docker",
    completed: false
  },
  {
    id: 2,
    title: "Configurar Sonar",
    completed: false
  }
];

// Listar tareas
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

// Obtener una tarea
app.get("/tasks/:id", (req, res) => {
  const id = Number(req.params.id);
  const task = tasks.find((task) => task.id === id);

  if (!task) {
    return res.status(404).json({ error: "Task not found" });
  }

  res.json(task);
});

// Crear una tarea
app.post("/tasks", (req, res) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ error: "Title is required" });
  }

  const newTask = {
    id: tasks.length + 1,
    title,
    completed: false
  };

  tasks.push(newTask);

  res.status(201).json(newTask);
});

// Actualizar una tarea
app.put("/tasks/:id", (req, res) => {
  const id = Number(req.params.id);
  const task = tasks.find((task) => task.id === id);

  if (!task) {
    return res.status(404).json({ error: "Task not found" });
  }

  const { title, completed } = req.body;

  if (title !== undefined) {
    task.title = title;
  }

  if (completed !== undefined) {
    task.completed = completed;
  }

  res.json(task);
});

// Eliminar una tarea
app.delete("/tasks/:id", (req, res) => {
  const id = Number(req.params.id);
  const taskIndex = tasks.findIndex((task) => task.id === id);

  if (taskIndex === -1) {
    return res.status(404).json({ error: "Task not found" });
  }

  const deletedTask = tasks.splice(taskIndex, 1);

  res.json(deletedTask[0]);
});

app.listen(PORT, () => {
  console.log(`Todo API running on port ${PORT}`);
});