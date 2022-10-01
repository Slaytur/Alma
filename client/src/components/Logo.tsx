import React from 'react';

import LogoImg from '../assets/img/favicons/favicon.png';

class Logo extends React.Component {
    render = (): React.ReactNode => (
        <img src={LogoImg} />
    );
}

export default Logo;
