import React from 'react';

//make dark and light switch

class Settings extends React.Component {
    changeState = (): void => {
        this.setState({ state: this.state === `Light Mode` ? `Dark Mode` : `Light Mode` });
    };

    render = (): React.ReactNode => (
        <div>
            <button onClick={this.changeState}></button> 
        </div>
    );
}

export default Settings;
