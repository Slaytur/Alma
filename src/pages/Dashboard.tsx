import React from 'react';
import Sidebar from '../components/Sidebar';

class Dashboard extends React.Component {
    render = (): React.ReactNode => (
        <div className="tw-flex">
            <Sidebar />
        </div>
    );
}

export default Dashboard;
