import axios from 'axios';
import React from 'react';
import Logo from './Logo';

declare const API_URL: string;

class Header extends React.Component<Record<string, never>, { isLoggedIn: boolean }> {
    constructor (props: Record<string, never>) {
        super(props);

        this.state = {
            isLoggedIn: false
        };
    }

    render = (): React.ReactNode => (
        <header>
            <nav className="navbar navbar-expand-sm tw-bg-[rgba(220,220,220,0.3)]">
                <div className="container-fluid">
                    <a href="/"><Logo /></a>
                    {/* <a href="/" className="navbar-brand ps-2 fs-2 fw-semibold"></a> */}
                    <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-4 ">
                            <li className="nav-item"><a href="/" className="nav-link active" aria-current="page">Home</a></li>
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
                            <li className="nav-link disabled"></li>
                        </ul>
                        <a href="/join-class" className="dropdown-item profile-settings-opt">
                            <i className="icofont icofont-plugin"></i>
                            Join Class
                        </a>

                        {/* <form action="" className="tw-flex" role="search">
                            <input type="search" className="form-control me-2" placeholder="Search" aria-label="Search" />
                            <button type="submit" className="btn btn-outline-success">Search</button>
                        </form> */}

                        <ul className="navbar-nav ms-auto mb-1 mb-lg-0">
                            <li className={`nav-item dropdown nav-profile-menu${!this.state.isLoggedIn ? ` d-none` : ``}`}>
                                <a href="#" className="nav-link btn" id="profile-dropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="icofont icofont-user-alt-7"></i>
                                </a>
                                <div className="welcome-string"></div>
                                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="profile-dropdown">
                                    <li>
                                        <a href="/profile" className="dropdown-item profile-settings-opt">
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
                                        {/* <a href="/calendar" className="dropdown-item profile-settings-opt">
                                            <i className="icofont icofont-calendar tw-mr-1"></i>
                                            Calendar
                                        </a> */}
                                    </li>
                                    <li>
                                        <a href="/settings" className="dropdown-item profile-settings-opt">
                                            <i className="icofont icofont-gear tw-mr-1"></i>
                                            Settings
                                        </a>
                                    </li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li>
                                        <a href={`${API_URL}/auth/logout`} className="dropdown-item profile-logout-opt">
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

    componentDidMount = async (): Promise<void> => {
        await axios.get(`${API_URL}/auth/authenticated`).then(res => {
            const data: { isLoggedIn: boolean, username?: string } = res.data;
            if (data.isLoggedIn) this.setState({ isLoggedIn: true });
        });
    };
}

export default Header;
