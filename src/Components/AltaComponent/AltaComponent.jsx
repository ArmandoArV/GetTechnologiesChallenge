import React, { useState } from "react";

const AltaComponent = ({ onSubmit, onRegisterLog }) => {
  const [nombre, setNombre] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [cargo, setCargo] = useState("");
  const [edad, setEdad] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nombre || !fechaNacimiento || !cargo) {
      alert("Todos los campos son obligatorios");
      return;
    }

    const fechaNacimientoMillis = new Date(fechaNacimiento).getTime();

    const newEmployeeData = {
      nombre,
      fechaNacimiento: fechaNacimientoMillis,
      edad,
      cargo,
      estatus: true,
    };

    // Call the logging function with the new employee data
    onRegisterLog(newEmployeeData);

    // Call the onSubmit prop function with the new employee data
    onSubmit(newEmployeeData);

    // Reset form fields
    setNombre("");
    setFechaNacimiento("");
    setEdad("");
    setCargo("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre:
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </label>
      <br />
      <label>
        Fecha de Nacimiento:
        <input
          type="date"
          value={fechaNacimiento}
          onChange={(e) => setFechaNacimiento(e.target.value)}
        />
      </label>
      <br />
      <label>
        Edad:
        <input
          type="number"
          value={edad}
          onChange={(e) => setEdad(e.target.value)}
        />
      </label>

      <br />

      <label>
        Cargo:
        <input
          type="text"
          value={cargo}
          onChange={(e) => setCargo(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Registrar Empleado</button>
    </form>
  );
};

export default AltaComponent;
