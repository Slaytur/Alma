import React from 'react';

import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';

import './assets/css/icofont/icofont.min.css';
import './assets/scss/main.scss';

class App extends React.Component {
    render = (): React.ReactNode => (
        <div id="app" className="tw-flex tw-flex-col tw-h-full">
            <Header />
            <Router>
                <Routes>
                    {/* Home Page */}
                    <Route path="/" element={<Home />} />
                </Routes>
            </Router>
            <Footer />
        </div>
    );
}

export default App;
