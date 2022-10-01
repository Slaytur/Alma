import React from "react";

import LeftArrow from '../../assets/img/left-arrow.png';

class Lecture extends React.Component<{ visibility: `COLLAPSED` | `EXPANDED` }, { state: `COLLAPSED` | `EXPANDED` }> {
    constructor (props: { visibility: `COLLAPSED` | `EXPANDED` }) {
        super(props);

        this.state = {
            state: this.props.visibility
        };
    }

    changeState = (): void => {
        // blah blah blah set the state
        this.setState({ state: this.state.state === `COLLAPSED` ? `EXPANDED` : `COLLAPSED` });
    };

    render = (): React.ReactNode => (
        <section className={`tw-font-poppins tw-font-normal ${this.state.state === `COLLAPSED` ? `tw-hidden` : `tw-block`}`}>
            <div className="tw-self-center tw-hidden md:tw-flex tw-absolute tw-h-full tw-top-0 tw-left-0 tw-right-0 tw-items-center">
                <img onClick={this.changeState} src={LeftArrow} alt="leftarrow" className=" tw-ml-6 tw-z-50 tw-relative tw-left-4 tw-w-[42px] tw-h-[53px] " />
                <img onClick={this.changeState} src={LeftArrow} alt="rightarrow" className=" tw-mr-6 mirror tw-z-50 tw-absolute tw-right-4  tw-w-[42px] tw-h-[53px] " />
            </div>
            <div className="tw-opacity-90 tw-backdrop-blur-xl  tw-h-screen tw-w-screen tw-inset-0 tw-z-[40] tw-blur-md tw-absolute tw-l-0 tw-b-2 tw-t-3 tw-r-2 " />
            <i className="tw-cursor-pointer icofont icofont-close tw-absolute tw-right-[11rem] tw-top-[3rem] tw-z-[60] tw-p-1" onClick={this.changeState}></i>
            <div className="tw-absolute tw-inset-x-10 md:tw-inset-x-40 tw-inset-y-10 tw-bg-primary tw-blur tw-bg-opacity-70 tw-rounded-lg tw-z-50 tw-py-8 tw-px-16"></div>
            <div className="tw-absolute tw-inset-x-10 md:tw-inset-x-40 tw-inset-y-10 tw-bg-white tw-rounded-lg tw-z-50 tw-py-8 tw-px-16 tw-overflow-scroll tw-flex tw-flex-col tw-items-center">
                <h1 className="tw-text-[34px]">O-Chem 1.2 Lesson</h1>
                <hr className=" tw-h-[1px] tw-w-auto tw-mx-4" />
                <button className="tw-ml-16 tw-text-2xl tw-mt-6">Materials</button>
                <p>The range of chemicals studied in organic chemistry includes hydrocarbons (compounds containing only carbon and hydrogen) as well as compounds based on carbon, but also containing other elements,[1][2][3] especially oxygen, nitrogen, sulfur, phosphorus (included in many biochemicals) and the halogens. Organometallic chemistry is the study of compounds containing carbon–metal bonds.</p>
                <button className="tw-ml-16 tw-text-2xl tw-mt-6">Assignment</button>
                <p className="tw-pt-4">Draw the Structure of CH₃COOH</p>
            </div>

        </section>
    );
}

export default Lecture;
