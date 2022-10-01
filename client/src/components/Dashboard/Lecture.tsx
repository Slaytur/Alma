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
        <section className={`tw-font-poppins ${this.state.state === `COLLAPSED` ? `tw-hidden` : `tw-block`}`}>
            <div className="tw-self-center tw-hidden md:tw-flex tw-absolute tw-h-full tw-top-0 tw-left-0 tw-right-0 tw-items-center">
                <img src={LeftArrow} alt="leftarrow" className=" tw-ml-6 tw-z-50 tw-relative tw-left-4 tw-w-[42px] tw-h-[53px] " />
                <img src={LeftArrow} alt="rightarrow" className=" tw-mr-6 mirror tw-z-50 tw-absolute tw-right-4  tw-w-[42px] tw-h-[53px] " />
            </div>
            <div className="tw-opacity-90 tw-backdrop-blur-xl  tw-h-screen tw-w-screen tw-inset-0 tw-z-[40] tw-blur-md tw-absolute tw-l-0 tw-b-2 tw-t-3 tw-r-2 " />
            <i className="tw-cursor-pointer icofont icofont-close tw-absolute tw-right-[11rem] tw-top-[3rem] tw-z-[60] tw-p-1" onClick={this.changeState}></i>
            <div className="tw-absolute tw-inset-x-10 md:tw-inset-x-40 tw-inset-y-10 tw-bg-primary tw-blur tw-bg-opacity-70 tw-rounded-lg tw-z-50 tw-py-8 tw-px-16"></div>
            <div className="tw-absolute tw-inset-x-10 md:tw-inset-x-40 tw-inset-y-10 tw-bg-white tw-rounded-lg tw-z-50 tw-py-8 tw-px-16 tw-overflow-scroll">
                <div className="tw-flex tw-flow tw-w-full ">
                    <h1 className="tw-text-[34px] tw-float-left">Title Of module</h1>
                    <button className="tw-ml-16 tw-float-right tw-underline tw-underline-offset-2">Materials</button>
                    <button className="tw-ml-16 tw-float-right">Assignment</button>
                </div>
                <p className="tw-pt-4">Simple text element/container for the body that<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>Hi</p>
            </div>

        </section>
    );
}

export default Lecture;
