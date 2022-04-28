import React from 'react'

const Navbar = () => {
    return (
            <nav className="navbar navbar-light bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand text-white" href="/">Blog</a>
                    <button className="navbar-toggler bg-light" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Blog</h5>
                            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="blogs">Blogs</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="control">Blog Control</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
    )
}

export default Navbar;
