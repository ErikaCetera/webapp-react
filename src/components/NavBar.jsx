import { NavLink } from "react-router-dom";

const NavBar = () => {

const NavLinks = [
    {
        path: '/',
        name: 'Home'
    },
    {
        path: '/movies',
        name: 'Movies'
    }
];

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {NavLinks.map((curLink, index) => {
                                return(
                                <li key={index} className="nav-link">
                                    <NavLink className="dropdown-item" to={curLink.path}>{curLink.name}</NavLink>
                                </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
};

export default NavBar;