import React from 'react';
import Content from '../../components/Content';
import Lecture from '../../components/Lecture';
import Sidebar from '../../components/Sidebar';
import Assignment from "../../components/Assignment";

class Dashboard extends React.Component {
    render = (): React.ReactNode => (
        <div className="tw-flex tw-mt-10">
            <Lecture />
            <Sidebar />
            <Content />
            <Assignment />
        </div>
    );
}

export default Dashboard;
