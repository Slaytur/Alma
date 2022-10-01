import React from 'react';

class Assignment extends React.Component {
    render = (): React.ReactNode => (
        <section className=" tw-w-64 tw-items-end tw-justify-end tw-mr-4">
            <div className=" tw-font-poppins tw-h-full tw-text-black tw-bg-opacity-60 tw-rounded-md tw-mt-4 tw-px-2 tw-py-3 tw-w-64 hover:tw-w-64 tw-ease-in tw-duration-150 tw-z-10 tw-bg-primary tw-text-center mt-16">
                <h2 className="tw-text-xl">Assignments</h2>
                <hr className="tw-mx-4" />

                <div className="tw-h-full tw-flex tw-flex-col tw-items-center"></div>
            </div>
        </section>
    );
}

export default Assignment;
