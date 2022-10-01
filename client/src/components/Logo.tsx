import React from 'react';

import LogoImg from '../assets/img/favicons/favicon.png';

class Logo extends React.Component {
    render = (): React.ReactNode => (
        <img className="tw-w-16 tw-h-16" src={LogoImg} />
    );
}

export default Logo;
