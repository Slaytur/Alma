import React from 'react';
import Content from '../../components/Dashboard/Modules/Content';
import Sidebar from '../../components/Dashboard/Sidebar';

class Dashboard extends React.Component {
    render = (): React.ReactNode => (
        <main className="container tw-flex tw-my-4">
            <div className="tw-flex-col">
                <Sidebar />
            </div>
            <Content />
        </main>
    );
}

export default Dashboard;
