import React from 'react';

class Sidebar extends React.Component {
    render = (): React.ReactNode => (
        <aside className="tw-w-32 md:tw-w-64 tw-z-10 tw-ml-10px">
            <div className='tw-w-32 md:tw-w-64 hover:tw-w-64 tw-ease-in tw-duration-150 tw-z-10'>
                <div className=" card card-body tw-font-poppins tw-h-full tw-text-black tw-bg-opacity-40 tw-rounded-md tw-mt-2 tw-ml-6 tw-px-2 tw-py-3  tw-ease-in tw-duration-150 tw-z-10 tw-bg-primary tw-text-center mt-16">
                    <div className='tw-flex tw-items-center tw-justify-center'>
                        <h2 className="tw-text-xl tw-px-4">Classes</h2>
                        <div className='tw-w-full'></div>
                        <a href='/join-class'><i className="icofont icofont-plus tw-float-right tw-cursor-pointer"></i></a>
                    </div>
                    <hr className="tw-mx-4" />

                    <div className="tw-h-full tw-flex tw-flex-col tw-items-center">
                        <br/><br/><br/><br/><br/>class2
                    </div>
                </div>
                <div className="card tw-font-poppins tw-h-full tw-text-black tw-bg-opacity-40 tw-rounded-md tw-mt-4 tw-ml-6 tw-px-2 tw-py-3  tw-bg-primary tw-text-center mt-16">
                    <h2 className="tw-text-xl tw-overflow-clip tw-text-ellipsis px-2">Assignments</h2>
                    <hr className="tw-mx-4" />

                    <div className="tw-h-full tw-flex tw-flex-col tw-items-center">
                        <br/><br/><br/><br/><br/><br/><br/><br/>10/6/2022
                    </div>
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;
