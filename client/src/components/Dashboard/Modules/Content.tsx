import React from 'react';
import ModuleCard from '../ModuleCard';

class Content extends React.Component {
    render = (): React.ReactNode => (
        <article className="tw-w-full">
            <div className="card card-body">
                <h1 className="tw-text-[36px] tw-text-black tw-text-center card-title mb-0">Organic Chemistry</h1>
            </div>

            <div className="tw-flex tw-flex-col">
                <ModuleCard />
            </div>
        </article>
    );
}

export default Content;
