import React from "react";
import Login from "components/Login";
import Registro from "components/Registro";
import Home from "components/Home";
import Servicios from "components/Servicios";
import Contacto from "components/Contacto";
import Acerca from "components/Acerca";

function App() {
    return (
        <div>
            <Login />
            <Registro />
            <Home />
            <Servicios />
            <Contacto />
            <Acerca />
        </div>
    );
}

export default App;