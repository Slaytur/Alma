import React from 'react';

class ModuleCard extends React.Component {
    render = (): React.ReactNode => (
        <section className="tw-w-2/4">
            <div className="tw-my-2 tw-flex tw-bg-primary tw-bg-opacity-40 tw-text-[26px] tw-h-16 tw-justify-center tw-flex-col tw-items-center tw-rounded-md tw-w-full">
                <h1 className="tw-w-fit">Module - X</h1>
            </div>
        </section>
    );
}

export default ModuleCard;
