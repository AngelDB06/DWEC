import React from "react";
import Pruebas from "./pages/Pruebas";

export default function Myapp() {
  const v = 6;
  console.log(`Hola mundo ${v}`);
  return (
    <div>
      Hola Mundo {v + 1}
      <Pruebas />
    </div>
  );
}
