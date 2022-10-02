import React from 'react';
import ModuleCard from '../ModuleCard';

class Content extends React.Component {
    render = (): React.ReactNode => (
        <section className="tw-flex tw-flex-col tw-font-poppins tw-font-black tw-m-2 tw-w-full tw-justify-start tw-items-start tw-ml-10">
            <div className="card tw-flex tw-bg-primary tw-text[20] md:tw-text-[36px] tw-h-[10rem] tw-justify-end tw-flex-col tw-items-center tw-w-[95%] tw-rounded-lg tw-mb-6">
                <h1 className="tw-w-fit tw-pb-4 text-black tw-font-medium">Organic Chemistry</h1>
            </div>
            <ModuleCard />
        </section>
    );
}

export default Content;
