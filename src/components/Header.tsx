import React from 'react';

class Header extends React.Component {
    render = (): React.ReactNode => (
        <header >
            <nav className="tw-flex tw-h-16 tw-bg-secondary tw-w-full ">
                <div>
                    <h2>Hi</h2>
                </div>
            </nav>
        </header>
    );
}

export default Header;
