import { Link } from "react-router-dom";
import "./header.css";

function Header(){
    return(
        <nav>
            <Link to="/Home" className="link">Home</Link>
            <Link to="/Currículo" className="link">Currículo</Link>
            <Link to="/Projetos" className="link">Projetos</Link>
            <Link to="/Contatos" className="link">Contatos</Link>
        </nav>
    )
}
export default Header;
