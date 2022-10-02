import React from 'react';

class Sidebar extends React.Component {
    render = (): React.ReactNode => (
        <div className="tw-w-[300px]">
            <div className="card card-body mb-3">
                <div className="px-3 w-100">
                    <div className="d-flex flex-column flex-shrink-0">
                        <span className="fs-4 tw-text-center">Classes</span>
                        <hr className="my-2" />
                        <ul className="nav nav-pills flex-column mb-auto mt-2">
                            <li className="nav-item"><a href="#" className="nav-link active">Organic Chemistry</a></li>
                            <li className="nav-item"><a href="#" className="nav-link link-dark">Linear Algebra</a></li>
                        </ul>
                    </div>

                    <hr className="mb-2" />
                    <a href="/join-class" className="btn btn-sm btn-secondary btn-block w-100">Join a class...</a>
                </div>
            </div>

            <div className="card card-body">
                <div className="px-3 w-100">
                    <div className="d-flex flex-column flex-shrink-0">
                        <span className="fs-4 tw-text-center">Assignments</span>
                        <hr className="my-2" />
                        <span className="tw-text-xs tw-text-center">No assignments at this time!</span>
                        <ul className="nav nav-pills flex-column mb-auto mt-2"></ul>
                    </div>

                    {/* <hr className="mb-2" />
                    <a href="/join-class" className="btn btn-sm btn-secondary btn-block w-100">View all assignments...</a> */}
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
