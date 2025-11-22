import React, { useState } from 'react'
import { FormularioTarea } from './barrasDeTarea/FormularioTarea';
export const Tareas = () => {


  const [tareas, setTareas] = useState([]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("pendiente");

  const handleAddTask = async() => {
    const newTask = {
      title,
      description,
      status,
      date: new Date().toLocaleDateString()
    };

    try {
      const response = await fetch("http://127.0.0.1:5000/tasks",{
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newTask)
      });

      if (!response.ok){
        throw new Error("Error al crear la tarea");
      }

      const data = await response.json();
      console.log("Tarea creada:", data);

      setTareas([...tareas, newTask]);

      // limpiar
      setTitle("");
      setDescription("");
      setStatus("pendiente");
    } catch (error){
      console.error("Error al crear la tarea:", error);
    }
  };

  const [editingTask, setEditingTask] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleUpdateTask = () => {
    const updatedList = [...tareas];
    updatedList[editingTask.index] = {
      ...editingTask,
      title,
      description,
      status
    }
    setTareas(updatedList);
    cancelEdit();
  };

  const handleDeleteTask = () => {
    const updatedList = tareas.filter((_, i) => i !== editingTask.index);
    setTareas(updatedList);
    cancelEdit();
  };

  const cancelEdit = () => {
    setEditingTask(null);
    setShowModal(false);

    setTitle("");
    setDescription("");
    setStatus("pendiente");
};




  return (

    <div style={{width:"100%", display: "flex", flexDirection: "row", padding: "20px" , gap: "250px", justifyContent: "center"}}>

      {/* LISTA */}
      <div>
        <h3>Lista de tareas</h3>
        <ul>
          {tareas.map((tarea, index) => (
            <li key={index} style={{cursor: "pointer"}}
            onclick={() => {
              setEditingTask({...tarea, index});
              setTitle(tarea.title);
              setDescription(tarea.description);
              setStatus(tarea.status);
              setShowModal(true);
            }}>
              {tarea.title} - {tarea.date} - {tarea.status}
            </li>
          ))}
        </ul>

      </div>

      {/* FORMULARIO DESLIZABLE */}
      <FormularioTarea
        title={title}
        description={description}
        status={status}
        setTitle={setTitle}
        setDescription={setDescription}
        setStatus={setStatus}
        handleAddTask={handleAddTask}
      
      />

    </div>
  )
}
