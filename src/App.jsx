import { useState } from "react";
import "./App.css";
import AltaComponent from "./Components/AltaComponent/AltaComponent";
import EmpleadosComponent from "./Components/EmpleadosComponent/EmpleadosComponent";
import SearchComponent from "./Components/SearchComponent/SearchComponent";
export default function App() {
  const [empleados, setEmpleados] = useState([]);
  const [filteredEmpleados, setFilteredEmpleados] = useState([]);

  const handleAddEmpleado = (empleado) => {
    console.log("Employee registered:", empleado);

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

  const handleSearch = ({ criteria, text }) => {
    const lowercasedText = text.toLowerCase();

    const filteredData = empleados.filter((empleado) => {
      const valueToSearch = String(empleado[criteria]).toLowerCase();
      return valueToSearch.includes(lowercasedText);
    });

    setFilteredEmpleados(filteredData);
  };
  return (
    <div className="container">
      <div className="leftContainer">
        <div className="topContainer">
          <h1>Registro de Empleados</h1>
        </div>
        <div className="bottomContainer">
          <AltaComponent
            onSubmit={handleAddEmpleado}
            onRegisterLog={(data) => console.log(data)}
          />
        </div>
      </div>
      <div className="rightContainer">
        <div className="topContainer">
          <SearchComponent onSearch={handleSearch} />{" "}
        </div>
        <div className="bottomContainer">
          <EmpleadosComponent
            empleados={filteredEmpleados.length ? filteredEmpleados : empleados}
            onUpdateEdad={handleUpdateEdad}
            onUpdateEstatus={handleUpdateEstatus}
            onDelete={handleDelete}
          />
        </div>
      </div>
    </div>
  );
}
