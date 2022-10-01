import React from 'react';
import Content from '../components/Content';
import Sidebar from '../components/Sidebar';

class Dashboard extends React.Component {
    render = (): React.ReactNode => (
        <div className="tw-flex">
            <Sidebar />
            <Content />
        </div>
    );
}

export default Dashboard;
