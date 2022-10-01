import React from 'react';

//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';

import '../assets/scss/pages/home.scss';

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

            <a href="https://discord.com/api/oauth2/authorize?client_id=1025798600053248090&redirect_uri=https%3A%2F%2Fsloodle.alru.xyz%2Fauth%2Fdiscord&response_type=code&scope=identify%20email" className="btn btn-lg btn-primary btn-sign-in">
                <span>Sign In</span>
            </a>
        </main>
    );
}

export default Home;
