import Nav from "./Nav";
import Logo from "../assets/logo.svg";
import "../style/header.css";

function Header() {
	function activeFunction(e) {
		e.target.nextElementSibling.classList.toggle('active');
	}
	return (
		<>
          <header>
            <img src={Logo} alt="logo" />
            <div className="toggle" onClick={activeFunction}></div>
            <Nav/>
          </header>
		</>
	);
}

export default Header;
