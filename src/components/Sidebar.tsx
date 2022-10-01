import React from 'react';

class Sidebar extends React.Component {
    render = (): React.ReactNode => (
        <section className=" tw-m-2 tw-w-32 tw-font-poppins tw-text-2xl tw-h-full tw-text-[rgba(255,255,255,0.9)]">
            <div className="tw-text-black tw-bg-opacity-50 tw-rounded-md tw-py-2 tw-w-32 hover:tw-w-64 tw-z-10 tw-bg-primary tw-justify-center tw-items-center tw-text-center mt-16 tw-h-full">
                <h1>Classes</h1>
            </div>
        </section>
    );
}

export default Sidebar;
