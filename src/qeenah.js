import {Link} from 'react-router-dom';
function Qeenah(){
    return(

        <div className="clas">
            <div className='container'>
            
            <nav className="navbar navbar-expand-lg">
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div><h2>Project</h2></div>
            
            <div className="offcanvas offcanvas-start" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div className="offcanvas-header">
                    <span> </span>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas"
                        aria-label="Close"></button>
                </div>
                <div className="offcanvas-body"></div>
                
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-5">
                 <li className="nav-item">
                    <Link className="nav-link" to='/'>Home</Link>
                 </li>

                 <li className="nav-item">
                    <Link className="nav-link" to='/kirah'>About</Link>
                 </li>

                 <li className="nav-item">
                    <Link className="nav-link" to='/product'>Product</Link>
                 </li>

                 <li className="nav-item">
                    <Link className="nav-link" to='/contact'>Contact</Link>
                 </li>                
                </ul>
            
            </div>
            </nav>
            </div>
        </div>
    )
}


export default Qeenah;
