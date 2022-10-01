import React from 'react';

class Sidebar extends React.Component {
    render = (): React.ReactNode => (
        <aside className="tw-w-32 md:tw-w-64 tw-z-10 tw-    bg-white">
            <div className='tw-w-32 md:tw-w-64 hover:tw-w-64 tw-ease-in tw-duration-150 tw-z-10'>
                <div className="tw-font-poppins tw-h-full tw-text-black tw-bg-opacity-40 tw-rounded-md tw-mt-4 tw-ml-4 tw-px-2 tw-py-3  tw-ease-in tw-duration-150 tw-z-10 tw-bg-primary tw-text-center mt-16">
                    <h2 className="tw-text-xl">Classes</h2>
                    <hr className="tw-mx-4" />

                    <div className="tw-h-full tw-flex tw-flex-col tw-items-center"></div>
                </div>
                <div className="tw-font-poppins tw-h-full tw-text-black tw-bg-opacity-40 tw-rounded-md tw-mt-4 tw-ml-4 tw-px-2 tw-py-3  tw-bg-primary tw-text-center mt-16">
                    <h2 className="tw-text-xl tw-overflow-clip tw-text-ellipsis px-2">Assignments</h2>
                    <hr className="tw-mx-4" />

                    <div className="tw-h-full tw-flex tw-flex-col tw-items-center"></div>
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;
