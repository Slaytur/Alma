import React from "react";

class Lecture extends React.Component {
    render = (): React.ReactNode => (
        <section className="tw-hidden">
            <div className="tw-opacity-70 tw-backdrop-blur-xl  tw-h-screen tw-w-screen tw-inset-0 tw-z-[40] tw-blur-md tw-absolute tw-l-0 tw-b-2 tw-t-3 tw-r-2 " />
            <div className="tw-absolute tw-inset-x-40 tw-inset-y-10 tw-bg-lightgray tw-shadow-md tw-shadow-black tw-rounded-lg tw-z-50 tw-py-8 tw-px-16">
                <p>auto update</p>
            </div>
        </section>
    );
}

export default Lecture;
