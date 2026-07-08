import { Link } from "react-router-dom";
import { Nav } from "../Nav/Nav";

import "./Header.css";

export const Header = () => {
  return (
    <header>
      <div className="container">
          <span>Tienda de Mangas</span>
      </div>
      <Nav />
    </header>
  );
}; 