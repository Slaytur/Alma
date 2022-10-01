import React from 'react';

class JoinClass extends React.Component {
    render = (): React.ReactNode =>
        (
            <div className="tw-relative tw-top-40 tw-text-center tw-item-center tw-bg-grey">
                <form className="tw-bg-primary tw-mx-[35rem] tw-py-25 tw-rounded-lg">
                    <h1 className="tw-text-xl tw-py-1"> Class Code</h1>
                    <input type="text" name="classcode"/> <br/>
                    <input className="tw-py-1" type="submit"/>
                </form>
            </div>
        );
}

export default JoinClass;
