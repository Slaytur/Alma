import React from 'react';

import LogoImg from '../assets/img/logos/logo.png';

class Logo extends React.Component {
    render = (): React.ReactNode => (
        <img className="tw-w-32 tw-h-16" src={LogoImg} />
    );
}

export default Logo;
