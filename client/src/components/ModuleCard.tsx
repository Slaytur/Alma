import React from 'react';

class ModuleCard extends React.Component<Record<string, never>, { state: `COLLAPSED` | `EXPANDED` }> {
    constructor (props: Record<string, never>) {
        super(props);

        this.state = {
            state: `COLLAPSED`
        };
    }

    changeState = (): void => {
        // blah blah blah set the state
        this.setState({ state: this.state.state === `COLLAPSED` ? `EXPANDED` : `COLLAPSED` });
    };

    view = (): void => {
        console.log(`yes`);
    };

    render = (): React.ReactNode => (
        <section className="tw-w-2/4">
            <div className="tw-mt-2 tw-bg-primary tw-bg-opacity-60 tw-text-[26px] tw-h-16 tw-justify-left tw-items-center tw-rounded-md tw-w-full tw-flex">
                <button className="tw-pr-10 tw-pl-6" onClick={this.changeState}>{this.state.state === `EXPANDED` ? `Collapse` : `Expand`}</button>
                <h1 className="tw-w-fit tw-float-none">Module - X</h1>
            </div>
            <div className={`tw-mb-2 tw-flex tw-bg-primary tw-bg-opacity-40 tw-text-[16px] tw-h-16 tw-justify-center tw-flex-col tw-items-center tw-rounded-md tw-w-5/6 ${this.state.state === `COLLAPSED` ? `tw-invisible` : ` tw-block`}`}>
                <button onClick={this.view}>View</button>
                <h1 className="tw-w-fit">Module - X.x</h1>
            </div>
        </section>
    );
}

export default ModuleCard;
