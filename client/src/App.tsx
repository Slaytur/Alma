import React from 'react';

import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Calendar from './pages/Calendar';

import './assets/css/icofont/icofont.min.css';
import './assets/scss/main.scss';

import 'bootstrap';

class App extends React.Component {
    render = (): React.ReactNode => (
        <div id="app" className="tw-flex tw-flex-col tw-w-screen tw-h-screen">
            <Header />
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/calendar" element={<Calendar />} />
                </Routes>
            </Router>
            <Footer />
        </div>
    );
}

export default App;
