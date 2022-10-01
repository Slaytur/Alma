import React from 'react';

//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';

import '../assets/scss/pages/home.scss';

declare const API_URL: string;

class Home extends React.Component {
    render = (): React.ReactNode => (
        <main className="tw-text-dark tw-text-center container">
            <br />
            <br />
            <br />
            <br />

            <h1 className="tw-text-6xl mt-5">Welcome to Alma!</h1>
            <p className="desc tw-mt-4">
                It&apos;s like Moodle, but better...
            </p>

            <br />
            <br />
            <br />

            <a href={`${API_URL}/auth/discord`} className="btn btn-lg btn-primary btn-sign-in">
                <span>Sign In</span>
                {/*<FontAwesomeIcon icon={faSignInAlt} />*/}
            </a>
        </main>
    );
}

export default Home;
