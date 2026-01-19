import { NavLink } from "react-router";

export function Navegacion() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink><br />
      <NavLink to="/receta">Recetas</NavLink>
    </nav>
  );
}