import React from 'react';

class Header extends React.Component {
    render = (): React.ReactNode => (
        <header>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <a href="#" className="navbar-brand">Sloodle</a>
                    <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item"><a href="#" className="nav-link active" aria-current="page">Home</a></li>
                            <li className="nav-item"><a href="#" className="nav-link" aria-current="page">Link</a></li>
                            <li className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false"></a>
                                <ul className="dropdown-menu">
                                    <li><a href="#" className="dropdown-item">Action 1</a></li>
                                    <li><a href="#" className="dropdown-item">Action 2</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a href="#" className="dropdown-item">Action 3</a></li>
                                </ul>
                            </li>
                            <li className="nav-link disabled">Disabled</li>
                        </ul>

                        {/* <form action="" className="tw-flex" role="search">
                            <input type="search" className="form-control me-2" placeholder="Search" aria-label="Search" />
                            <button type="submit" className="btn btn-outline-success">Search</button>
                        </form> */}

                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a href="/support" className={`nav-link ${window.location.pathname === `/support` ? `active disabled` : ``}`}>Support</a>
                            </li>
                            <li className="nav-item dropdown nav-profile-menu">
                                <a href="#" className="nav-link btn" id="profile-dropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="icofont icofont-user-alt-7"></i>
                                </a>
                                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="profile-dropdown">
                                    <li>
                                        <a href="#" className="dropdown-item profile-settings-opt">
                                            <i className="icofont icofont-people tw-mr-1"></i>
                                            Profile
                                        </a>
                                    </li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li>
                                        <a href="/dashboard" className="dropdown-item profile-settings-opt">
                                            <i className="icofont icofont-dashboard tw-mr-1"></i>
                                            Dashboard
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/settings" className="dropdown-item profile-settings-opt">
                                            <i className="icofont icofont-gear tw-mr-1"></i>
                                            Settings
                                        </a>
                                    </li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li>
                                        <a href="/auth/logout" className="dropdown-item profile-logout-opt">
                                            <i className="icofont icofont-logout tw-mr-1"></i>
                                            Logout
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
