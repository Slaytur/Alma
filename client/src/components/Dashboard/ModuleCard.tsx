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
        console.log(`show the lecture element with right materials`);
    };

    render = (): React.ReactNode => (
        <section className=" tw-font-poppins tw-font-normal tw-ml-4 tw-w-[90%] md:tw-w-2/4">
            <div onClick={this.changeState} className="card tw-cursor-pointer tw-select-none tw-mt-2 tw-bg-primary tw-bg-opacity-60 tw-text-[26px] tw-h-16 tw-justify-left tw-items-start tw-rounded-md tw-w-full tw-flex tw-justify-start">
                <div className='card-body tw-flex'>
                    <i className={`icofont ${this.state.state === `COLLAPSED` ? `icofont-rounded-right` : `icofont-rounded-down`}  tw-pt-[2px] tw-pr-5`}></i>
                    <h1 className="tw-w-fit">Module - X</h1>
                </div>
            </div>
            <div className={`card tw-justify-center tw-mb-2 tw-flex tw-bg-primary tw-bg-opacity-40 tw-text-[16px] tw-h-10 tw-mt-1 tw-justify-left tw-items-center tw-rounded-lg tw-w-5/6 ${this.state.state === `COLLAPSED` ? `tw-invisible` : ` tw-block`}`}>
                <button onClick={this.view} className="tw-pl-6 tw-pr-16"></button>
                <h1 className="tw-w-fit">Module - X.x</h1>
            </div>
        </section>
    );
}

export default ModuleCard;
