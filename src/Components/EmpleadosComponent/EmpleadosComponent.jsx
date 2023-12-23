import React, { useEffect, useCallback, useState } from "react";

const EmpleadosComponent = ({ empleados, onDelete, onUpdateEdad }) => {
  // Define empleados state and its updater function
  const [empleadosState, setEmpleados] = useState(empleados);

  // Use useEffect to log the updated empleados whenever it changes
  // Define onUpdateEstatus function to update the empleados state
  const onUpdateEstatus = useCallback(
    (id, newStatus) => {
      setEmpleados((prevEmpleados) =>
        prevEmpleados.map((empleado) =>
          empleado.id === id ? { ...empleado, estatus: newStatus } : empleado
        )
      );
    },
    [setEmpleados]
  );

  // Use useCallback to memoize the function and prevent unnecessary re-renders
  const handleUpdateEstatus = useCallback(
    (id, newStatus) => {
      onUpdateEstatus(id, newStatus);
    },
    [onUpdateEstatus]
  );

  const renderActions = (empleado) => {
    if (empleado.estatus) {
      return (
        <>
          <button onClick={() => handleUpdateEstatus(empleado.id, false)}>
            Desactivar
          </button>
          <button onClick={() => onDelete(empleado.id)}>Eliminar</button>
        </>
      );
    } else {
      return (
        <button onClick={() => handleUpdateEstatus(empleado.id, true)}>
          Activar
        </button>
      );
    }
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Nombre</th>
          <th>Cargo</th>
          <th>Edad</th>
          <th>Estatus</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {empleadosState.map((empleado) => (
          <tr key={empleado.id}>
            <td>{empleado.id}</td>
            <td>{empleado.nombre}</td>
            <td>{empleado.cargo}</td>
            <td>
              <input
                type="number"
                value={empleado.edad}
                onChange={(e) => onUpdateEdad(empleado.id, e.target.value)}
              />
            </td>
            <td>{empleado.estatus ? "Activo" : "Inactivo"}</td>
            <td>{renderActions(empleado)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EmpleadosComponent;
