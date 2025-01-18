
import { NavLink } from 'react-router-dom'

function NavBar() {
    
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: "#B5E0D2"}}>
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/"><i class="bi bi-people"></i></NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                        <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown link
                        </NavLink>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><NavLink className="dropdown-item" to="/">Home</NavLink></li>
                            <li><NavLink className="dropdown-item" to="/create">Create User</NavLink></li>
                            <li><NavLink className="dropdown-item" to="/list">Show User</NavLink></li>
                        </ul>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default NavBar