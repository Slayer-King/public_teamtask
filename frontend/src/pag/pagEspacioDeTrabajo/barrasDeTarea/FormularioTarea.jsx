import React from "react";

export const FormularioTarea = ({
title,
description,
status,
setTitle,
setDescription,
setStatus,
handleAddTask
}) => {
return (
<div style={{display:"flex", flexDirection:"column"}}>

```
  <h3>Nueva Tarea</h3>

  <label>Título:</label>
  <input
    type="text"
    value={title}
    onChange={(e) => setTitle(e.target.value)}
  />

  <label>Descripción:</label>
  <textarea
    value={description}
    onChange={(e) => setDescription(e.target.value)}
  ></textarea>

  <button onClick={handleAddTask} style={{ marginTop: "10px" }}>
    Crear tarea
  </button>
</div>

);
};
