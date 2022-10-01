import React from 'react';
import Content from '../../components/Dashboard/Content';
import Lecture from '../../components/Dashboard/Lecture';
import Sidebar from '../../components/Sidebar';

class Dashboard extends React.Component {
    render = (): React.ReactNode => (
        <div className="tw-flex tw-mt-4">
            <Lecture />
            <div className="tw-flex-col">
                <Sidebar />
            </div>
            <Content />
        </div>
    );
}

export default Dashboard;
