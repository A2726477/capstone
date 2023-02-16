import Nav from "./Nav";
import Logo from "../assets/logo.svg";

function Header() {
	return (
		<>
          <header>
            <img src={Logo} alt="logo" />
            <Nav/>
          </header>
		</>
	);
}

export default Header;
