import React from 'react';

class JoinClass extends React.Component {
    render = (): React.ReactNode => (
        <main className="container tw-mt-10">
            <h1 className="text-center my-5 tw-text-6xl">Join Class</h1>
            <div className="card card-body text-dark tw-bg-primary">
                <form action="/" method="GET">
                    <div className="form-group mb-3">
                        <label htmlFor="username" className="form-label">Class Code</label>
                        <input type="username" name="class-code" className="form-control mb-3" placeholder="Enter your class code..." maxLength={7} required />
                    </div>
                </form>
            </div>
        </main>
    );
}

export default JoinClass;
