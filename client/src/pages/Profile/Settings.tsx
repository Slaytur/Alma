import React from 'react';

import { AppController, SettingsController } from '../../App';

class Settings extends React.Component {
    darkMode: React.RefObject<HTMLInputElement>;

    /**
     * Fired when a checkbox state is changed.
     * @param name The name of the input.
     */
    onCheckboxUpdate = (name: string, e: React.ChangeEvent<HTMLInputElement>): void => {
        SettingsController.values.darkMode = !SettingsController.values.darkMode;
        AppController.updateApp();
    };

    render = (): React.ReactNode => (
        <div className="tw-text-center">
            <h1 className="tw-text-xl tw-mt-16 tw-text-[32px] tw-mix-blend-exclusion tw-text-[#b8b8b8]">Settings</h1>

            <div className='tw-flex tw-justify-center tw-items-center '>
                <div className="tw-mt-6 card tw-pr-4 form-check form-switch tw-w-fit tw-bg-black tw-border-white tw-mix-blend-exclusion">
                    <div className="form-check form-switch ">
                        <input className="form-check-input" type="checkbox" role="switch" id="dark-mode-switch" onChange={(e => this.onCheckboxUpdate(`darkMode`, e))} />
                        <label className="form-check-label tw-text-white" htmlFor="dark-mode-switch">Dark Mode</label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Settings;
