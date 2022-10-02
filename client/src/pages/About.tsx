import React from 'react';

class About extends React.Component {
    render = (): React.ReactNode => (
        <div className="tw-text-center tw-outline-10">
            <div className="tw-text-[50px]"> <h1><b> Alma </b></h1> </div>
            <br/>
            <ol>
                <li>An optimized learning platform </li> <br/>
                <li>Catered to Students</li> <br/>
                <li>By Students</li>
            </ol>
        </div>
    );
}

export default About;
