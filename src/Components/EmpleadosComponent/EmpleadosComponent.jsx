import React, { useCallback, useEffect } from "react";
const EmpleadosComponent = ({
  empleados,
  onUpdateEstatus,
  onDelete,
  onUpdateEdad,
}) => {
  console.log("Empleados:", empleados);

  const handleUpdateEstatus = useCallback(
    (id, newStatus) => {
      onUpdateEstatus(id, newStatus);
    },
    [onUpdateEstatus]
  );

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
            {empleado.estatus ? (
              // Render input field if empleado.estatus is true

              <td>{empleado.edad}</td>
            ) : (
              // Render simple td with empleado.edad if empleado.estatus is false
              <td>
                <input
                  type="number"
                  value={empleado.edad}
                  onChange={(e) => onUpdateEdad(empleado.id, e.target.value)}
                />
              </td>
            )}
            <td>{empleado.estatus ? "Activo" : "Inactivo"}</td>
            <td>{renderActions(empleado)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EmpleadosComponent;
