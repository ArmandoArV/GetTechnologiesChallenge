import React, { useCallback, useEffect, useState } from "react";
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

  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = useCallback((newPage) => {
    setCurrentPage(newPage);
  }, []);

  const paginatedEmpleados = empleados.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div>
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
          {paginatedEmpleados.map((empleado) => (
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
      {empleados.length > itemsPerPage && (
        <div className="pagination">
          {[...Array(Math.ceil(empleados.length / itemsPerPage))].map(
            (_, index) => (
              <button
                key={index + 1}
                onClick={() => handlePageChange(index + 1)}
                className={currentPage === index + 1 ? "active" : ""}
              >
                {index + 1}
              </button>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default EmpleadosComponent;
