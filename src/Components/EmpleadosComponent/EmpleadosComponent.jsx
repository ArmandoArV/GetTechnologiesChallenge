import React, { useCallback, useEffect } from "react";
import "./EmpleadosComponent.css";
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
          <button
            className="desactivar"
            onClick={() => handleUpdateEstatus(empleado.id, false)}
          >
            Desactivar
          </button>
          <button className="eliminar" onClick={() => onDelete(empleado.id)}>
            Eliminar
          </button>
        </>
      );
    } else {
      return (
        <button
          className="activar"
          onClick={() => handleUpdateEstatus(empleado.id, true)}
        >
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
            {empleado.estatus ? (
              <td>{empleado.nombre}</td>
            ) : (
              <td>
                <input
                  type="text"
                  value={empleado.nombre}
                  onChange={(e) => onUpdateEdad(empleado.id, e.target.value)}
                />
              </td>
            )}
            {empleado.estatus ? (
              <td>{empleado.cargo}</td>
            ) : (
              <td>
                <input
                  type="text"
                  value={empleado.cargo}
                  onChange={(e) => onUpdateEdad(empleado.id, e.target.value)}
                />
              </td>
            )}
            {empleado.estatus ? (
              <td>{empleado.edad}</td>
            ) : (
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
