import React from 'react';

class Sidebar extends React.Component {
    render = (): React.ReactNode => (
        <section className=" tw-m-2 tw-w-32 tw-font-poppins tw-text-2xl tw-h-full tw-text-[rgba(255,255,255,0.9)]">
            <div className="tw-text-black tw-bg-opacity-40 tw-rounded-md tw-py-2 tw-w-32 hover:tw-w-64 tw-z-10 tw-bg-primary tw-items-center tw-text-center mt-16 tw-h-full tw-flex tw-flex-col">
                <h1>Classes</h1>
                <div className= "tw-m-2 tw-h-1 tw-w-1/2 tw-bg-black"></div>
            </div>
        </section>
    );
}

export default Sidebar;
