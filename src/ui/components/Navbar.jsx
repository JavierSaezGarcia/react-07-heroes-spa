import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context';
import { useContext } from 'react';



export const Navbar = () => {

    // useNavigate es hook hecho por react-router-dom para poder navegar entre paginascon muchas funciones
    const navigate = useNavigate();

    const { user, logout } = useContext(AuthContext);
    // console.log(user.name);

    const onLogout = () => {

        logout();

        navigate('/login', {
            replace: true // evita que la persona no pueda volver atras            
        });

    }
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">

            <Link
                className="navbar-brand"
                to="/"
            >
                Comic Publishers
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink
                        className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink
                        className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                        to="/dc"
                    >
                        DC
                    </NavLink>
                    <NavLink
                        className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className="nav-item nav-link text-white bg-primary">
                        {user?.name}
                    </span>
                    <button
                        onClick={onLogout}
                        
                        className="nav-item nav-link btn btn-outline-primary">
                            Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}