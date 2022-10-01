import React from 'react';
import Content from '../../components/Dashboard/Content';
import Sidebar from '../../components/Sidebar';

class Dashboard extends React.Component {
    render = (): React.ReactNode => (
        <div className="tw-flex tw-mt-4">
            <div className="tw-flex-col">
                <Sidebar />
            </div>
            <Content />
        </div>
    );
}

export default Dashboard;
