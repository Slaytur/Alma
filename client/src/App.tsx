import React from 'react';

import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Dashboard from './pages/Profile/Dashboard';
import Profile from './pages/Profile/Profile';
import Calendar from './pages/Calendar';
import JoinClass from './pages/JoinClass';
import Settings from './pages/Profile/Settings';

import Error404 from './pages/404';

import './assets/css/icofont/icofont.min.css';
import './assets/scss/main.scss';

import 'bootstrap';

let AppController: {
    updateApp: () => void
};

interface SettingsState {
    values: {
        darkMode: boolean
    }
}

const SettingsController: SettingsState = {
    values: {
        darkMode: false
    }
};

class App extends React.Component<Record<string, never>, { darkMode: boolean }> {
    constructor (props: Record<string, never>) {
        super(props);

        this.state = {
            darkMode: false
        };

        AppController = {
            updateApp: this.updateApp
        };
    }

    updateApp = (): void => {
        this.setState({ darkMode: SettingsController.values.darkMode });
    };

    render = (): React.ReactNode => (
        <div id="app" className={`tw-flex tw-flex-col tw-w-screen tw-h-screen ${this.state.darkMode ? `tw-bg-secondary` : `tw-bg-white`}`}>
            <Header />
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/calendar" element={<Calendar />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/join-class" element={<JoinClass />} />
                    <Route path="/calendar" element={<Calendar />} />

                    <Route path="/*" element={<Error404 />} />
                </Routes>
            </Router>
            <Footer />
        </div>
    );
}

export {
    App,
    AppController,
    SettingsController
};
