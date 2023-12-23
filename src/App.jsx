import { useState } from "react";
import "./App.css";
import AltaComponent from "./Components/AltaComponent/AltaComponent";
import EmpleadosComponent from "./Components/EmpleadosComponent/EmpleadosComponent";

export default function App() {
  const [empleados, setEmpleados] = useState([]);

  const handleAddEmpleado = (empleado) => {
    // Log the new employee data here
    console.log("Employee registered:", empleado);

    // Update the state with the new employee
    const newEmpleados = [
      ...empleados,
      { id: empleados.length + 1, ...empleado },
    ];
    console.log("New empleados state:", newEmpleados);

    setEmpleados(newEmpleados);
  };
  const handleUpdateEdad = (id, nuevaEdad) => {
    setEmpleados(
      empleados.map((empleado) =>
        empleado.id === id ? { ...empleado, edad: nuevaEdad } : empleado
      )
    );
  };

  // Función para actualizar el estatus de un empleado
  const handleUpdateEstatus = (id, nuevoEstatus) => {
    setEmpleados(
      empleados.map((empleado) =>
        empleado.id === id ? { ...empleado, estatus: nuevoEstatus } : empleado
      )
    );
  };

  const handleDelete = (id) => {
    setEmpleados(empleados.filter((empleado) => empleado.id !== id));
  };

  return (
    <div className="container">
      <div className="leftContainer">
        <AltaComponent
          onSubmit={handleAddEmpleado}
          onRegisterLog={(data) => console.log(data)}
        />
      </div>
      <div className="rightContainer">
        <EmpleadosComponent
          empleados={empleados}
          onUpdateEdad={handleUpdateEdad}
          onUpdateEstatus={handleUpdateEstatus}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
}
