import React from 'react';

import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';

import Home from './pages/Home';

import './assets/css/icofont/icofont.min.css';

import './assets/scss/main.scss';

class App extends React.Component {
    render = (): React.ReactNode => (
        <div id="app" className="tw-flex tw-flex-col tw-h-full">
            <Router>
                <Routes>
                    {/* Home Page */}
                    <Route path="/" element={<Home />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
