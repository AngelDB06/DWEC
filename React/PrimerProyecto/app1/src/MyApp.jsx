import React from "react";
import Pruebas from "./pages/Pruebas";
import Receta from "./components/Receta";
import { Route, Routes } from "react-router";
import { Navegacion } from "./components/Navegacion";
import DetallesPage from "./components/DetallesPage";

export default function Myapp() {
  const v = 6;
  console.log(`Hola mundo ${v}`);
  return (
    <div>

      <Routes>
        <Route path="/" element={<Pruebas />} />
        <Route path="/receta" element={<Receta />} />
        <Route path="/detalles/:id" element={<DetallesPage />} />
      </Routes>
    </div>
  );
}
