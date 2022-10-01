import React from 'react';

// make dark and light switch

class Settings extends React.Component {
    changeState = (): void => {
        this.setState({ state: this.state === `Light Mode` ? `Dark Mode` : `Light Mode` });
    };

    render = (): React.ReactNode => (
        <div className="tw-text-center">
            <h1 className="tw-text-xl tw-mt-16 tw-text-[32px]">Settings</h1>

            <div className='tw-flex tw-justify-center tw-items-center'>
                <div className="tw-mt-6 card form-check form-switch tw-w-fit ">
                    <div className=''>
                        <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Dark Mode</label>
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Settings;
