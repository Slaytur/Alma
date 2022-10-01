import React from 'react';

// make dark and light switch
interface SettingsState {
    values: {
        darkMode: boolean
    }
}

class Settings extends React.Component<Record<string, never>, SettingsState> {
    darkMode: React.RefObject<HTMLInputElement>;

    constructor (props: Record<string, never>) {
        super(props);

        this.state = {
            values: {
                darkMode: false
            }
        };

        this.darkMode = React.createRef<HTMLInputElement>();
    }

    /**
     * Fired when a checkbox state is changed.
     * @param name The name of the input.
     */
     onCheckboxUpdate = (name: string, e: React.ChangeEvent<HTMLInputElement>): void => {
        const values = { ...this.state.values };
        values[name] = e.target.checked;

        this.setState({ values });
    };


    render = (): React.ReactNode => (
        <div className="tw-text-center">
            <h1 className="tw-text-xl tw-mt-16 tw-text-[32px]">Settings</h1>

            <div className='tw-flex tw-justify-center tw-items-center'>
                <div className="tw-mt-6 card form-check form-switch tw-w-fit">
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch" id="dark-mode-switch" onChange={(e => this.onCheckboxUpdate(`darkMode`, e))} />
                        <label className="form-check-label" htmlFor="dark-mode-switch">Dark Mode</label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Settings;
