import React, { useCallback, useEffect } from "react";
const EmpleadosComponent = ({
  empleados,
  onUpdateEstatus,
  onDelete,
  onUpdateEdad,
}) => {
  console.log("Empleados:", empleados);

  // Use useCallback to memoize the function and prevent unnecessary re-renders
  const handleUpdateEstatus = useCallback(
    (id, newStatus) => {
      onUpdateEstatus(id, newStatus);
    },
    [onUpdateEstatus]
  );

  // Use useEffect to log the updated empleados whenever it changes
  useEffect(() => {
    console.log("Updated Empleados:", empleados);
  }, [empleados]);

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
        {empleados.map((empleado) => (
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
            <td>
              {" "}
              <td>{empleado.estatus ? "Activo" : "Inactivo"}</td>
            </td>
            <td>{renderActions(empleado)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EmpleadosComponent;
