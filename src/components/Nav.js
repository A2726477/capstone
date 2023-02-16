

function Nav() {
    const linksArr = [
    	{id: 1, name: "Home"},
    	{id: 2, name: "About"},
    	{id: 3, name: "Menu"},
    	{id: 4, name: "Reservations"},
    	{id: 5, name: "Order Online"},
    	{id: 6, name: "Login"}
    ];
    const links = linksArr.map(({id, name}) => {
    	return (
    		<li key={id}><a href={`#${name.toLowerCase()}`}>{name}</a></li>
    	);
    });
	return (
		<>
          <nav>
            <ul>{links}</ul>
          </nav>
		</>
	);
}

export default Nav;
