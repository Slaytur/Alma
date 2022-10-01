import React from 'react';

class Sidebar extends React.Component {
    render = (): React.ReactNode => (
        <section className="tw-font-poppins tw-h-full tw-text-black tw-bg-opacity-40 tw-rounded-md tw-mt-4 tw-ml-4 tw-px-2 tw-py-3 tw-w-32 hover:tw-w-64 tw-ease-in tw-duration-150 tw-z-10 tw-bg-primary tw-text-center mt-16">
            <h2 className="tw-text-xl">Classes</h2>
            <hr className="tw-mx-4" />

            <div className="tw-h-full tw-flex tw-flex-col tw-items-center"></div>
        </section>
    );
}

export default Sidebar;
