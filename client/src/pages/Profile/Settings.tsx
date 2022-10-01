import React from 'react';

// make dark and light switch

class Settings extends React.Component {
    changeState = (): void => {
        this.setState({ state: this.state === `Light Mode` ? `Dark Mode` : `Light Mode` });
    };

    render = (): React.ReactNode => (
        <div className="tw-text-center">
            <h1 className="tw-text-xl">Settings</h1>

            <div id="settingsBox" className="tw-bg-opacity-60 tw-text-[26px] tw-h-32 tw-justify-center tw-items-center tw-rounded-md tw-w-64 tw-flex">
                <label className="switch">
                    <span id="slider round"></span>
                </label>
            </div>
        </div>
    );
}

export default Settings;
