import React from 'react';
import Lecture from './Lecture';
import Lecture2 from './Lecture2';
import Lecture3 from './Lecture3';

class ModuleCard extends React.Component<Record<string, never>, Record<`state` | `lectureState` | `lectureState2` | `lectureState3`, `COLLAPSED` | `EXPANDED`>> {
    constructor (props: Record<string, never>) {
        super(props);

        this.state = {
            state: `COLLAPSED`,
            lectureState: `COLLAPSED`,
            lectureState2: `COLLAPSED`,
            lectureState3: `COLLAPSED`
        };
    }

    changeState = (): void => {
        this.setState({ state: this.state.state === `COLLAPSED` ? `EXPANDED` : `COLLAPSED` });
    };

    view = (): void => {
        this.setState({ lectureState: this.state.lectureState === `COLLAPSED` ? `EXPANDED` : `COLLAPSED` });
        console.log(this.state.lectureState);
    };

    view2 = (): void => {
        this.setState({ lectureState2: this.state.lectureState2 === `COLLAPSED` ? `EXPANDED` : `COLLAPSED` });
        console.log(this.state.lectureState2);
    };

    view3 = (): void => {
        this.setState({ lectureState3: this.state.lectureState3 === `COLLAPSED` ? `EXPANDED` : `COLLAPSED` });
        console.log(this.state.lectureState3);
    };

    render = (): React.ReactNode => (
        <section className='tw-w-full tw-h-full'>
            {this.state.lectureState === `EXPANDED` ? <Lecture visibility={this.state.state} /> : ``}
            {this.state.lectureState2 === `EXPANDED` ? <Lecture2 visibility={this.state.state} /> : ``}
            {this.state.lectureState3 === `EXPANDED` ? <Lecture3 visibility={this.state.state} /> : ``}
            <div className=" tw-font-poppins tw-font-normal tw-ml-4 tw-w-[90%] md:tw-w-2/4">
                <div onClick={this.changeState} className="card tw-cursor-pointer tw-select-none tw-mt-2 tw-bg-primary tw-bg-opacity-60 tw-text[16] lg:tw-text-[26px] tw-h-16 tw-justify-left tw-items-start tw-rounded-md tw-w-full tw-flex tw-justify-start">
                    <div className='card-body tw-flex'>
                        <i className={`icofont ${this.state.state === `COLLAPSED` ? `icofont-rounded-right` : `icofont-rounded-down`}  tw-pt-[2px] tw-pr-5`}></i>
                        <h1 className="tw-w-fit">Module - 1</h1>
                    </div>
                </div>
                <div onClick={this.view} className={`tw-cursor-pointer tw-select-none card tw-justify-center tw-mb-1 tw-flex tw-bg-primary tw-bg-opacity-40 tw-text-[16px] tw-h-10 tw-mt-1 tw-justify-left tw-items-start tw-rounded-lg tw-w-5/6 ${this.state.state === `COLLAPSED` ? `tw-invisible` : ` tw-block`}`}>
                    <div className="tw-flex tw-ml-6">
                        <i className="icofont icofont-rounded-right tw-w-fit"></i>
                        <h1 className="tw-w-fit">Module - 1.1</h1>
                    </div>
                </div>
                <div onClick={this.view2} className={`tw-cursor-pointer tw-select-none card tw-justify-center tw-mb-1 tw-flex tw-bg-primary tw-bg-opacity-40 tw-text-[16px] tw-h-10 tw-mt-1 tw-justify-left tw-items-start tw-rounded-lg tw-w-5/6 ${this.state.state === `COLLAPSED` ? `tw-invisible` : ` tw-block`}`}>
                    <div className="tw-flex tw-ml-6">
                        <i className="icofont icofont-rounded-right tw-w-fit"></i>
                        <h1 className="tw-w-fit">Module - 1.2</h1>
                    </div>
                </div>
                <div onClick={this.view3} className={`tw-cursor-pointer tw-select-none card tw-justify-center tw-mb-2 tw-flex tw-bg-primary tw-bg-opacity-40 tw-text-[16px] tw-h-10 tw-mt-1 tw-justify-left tw-items-start tw-rounded-lg tw-w-5/6 ${this.state.state === `COLLAPSED` ? `tw-invisible` : ` tw-block`}`}>
                    <div className="tw-flex tw-ml-6">
                        <i className="icofont icofont-rounded-right tw-w-fit"></i>
                        <h1 className="tw-w-fit">Module - 1.3</h1>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ModuleCard;
