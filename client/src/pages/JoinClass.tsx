import React from 'react';

class JoinClass extends React.Component {
    render = (): React.ReactNode =>
        (
            <div className="tw-relative tw-top-40 tw-text-center tw-item-center tw-bg-grey">
                <form className="tw-bg-gray tw-mx-[35rem] tw-py-25">
                <h1 className="tw-text-xl"> Class Code</h1>
                    <input type="text" name="classcode"/> <br/>
                    <input type="submit"/>
                </form>
            </div>
        );
}

export default JoinClass;
