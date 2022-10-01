import React from 'react';

class JoinClass extends React.Component {
    render = (): React.ReactNode =>
        (
            <div className="tw-relative top-40 tw-text-center tw-bg-green-500">
                <form className="tw-text-center">
                    <input type="text" name="classcode"/> <br/>
                    <input type="submit"/>
                </form>
            </div>
        );
}

export default JoinClass;
