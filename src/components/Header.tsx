import React from 'react';

class Header extends React.Component {
    render = (): React.ReactNode => (
        <header >
            <nav className="tw-h-12 tw-bg-secondary tw-w-full tw-flow-root tw-px-8 tw-text-lg">
                    <h2 className="tw-text-dimWhite tw-align-text-middle px-1 tw-whitespace-nowrap tw-float-left tw-h-full">--Logo--</h2>
                    <h2 className="tw-text-dimWhite tw-align-text-middle tw-w-fit tw-text-center tw-float-right tw-text">Benjamin Namikas ^</h2>
                    
            </nav>
        </header>
    );
}

export default Header;
