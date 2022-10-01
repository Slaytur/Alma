import React from 'react';
import Content from '../../components/Dashboard/Content';
import Sidebar from '../../components/Sidebar';

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
