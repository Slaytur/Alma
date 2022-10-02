import React from 'react';

import Lecture from './Modules/Lecture';
import Lecture2 from './Modules/Lecture2';
import Lecture3 from './Modules/Lecture3';

import '../../assets/scss/pages/Dashboard/ModuleCard.scss';

class ModuleCard extends React.Component<Record<string, never>, Record<`state` | `lectureState` | `lectureState2` | `lectureState3`, `COLLAPSED` | `EXPANDED`>> {
    constructor (props: Record<string, never>) {
        super(props);

        this.state = {
            state: `EXPANDED`,
            lectureState: `COLLAPSED`,
            lectureState2: `COLLAPSED`,
            lectureState3: `COLLAPSED`
        };
    }

    changeState = (): void => {
        this.setState({ state: this.state.state === `COLLAPSED` ? `EXPANDED` : `COLLAPSED` });
    };

    view = (): void => {
        this.setState({ lectureState: this.state.lectureState === `COLLAPSED` ? `EXPANDED` : `COLLAPSED` });
        console.log(this.state.lectureState);
    };

    view2 = (): void => {
        this.setState({ lectureState2: this.state.lectureState2 === `COLLAPSED` ? `EXPANDED` : `COLLAPSED` });
        console.log(this.state.lectureState2);
    };

    view3 = (): void => {
        this.setState({ lectureState3: this.state.lectureState3 === `COLLAPSED` ? `EXPANDED` : `COLLAPSED` });
        console.log(this.state.lectureState3);
    };

    render = (): React.ReactNode => (
        <section className="tw-w-full tw-mt-2">
            {this.state.lectureState === `EXPANDED` && <Lecture visibility={this.state.state} />}
            {this.state.lectureState2 === `EXPANDED` && <Lecture2 visibility={this.state.state} />}
            {this.state.lectureState3 === `EXPANDED` && <Lecture3 visibility={this.state.state} />}

            <ul className="list-unstyled ps-0">
                <li className="mb-1">
                    <div className="card card-body tw-bg-primary tw-bg-opacity-40">
                        <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#module1-collapse" aria-expanded="true" onClick={this.changeState}>Module - 1</button>
                    </div>
                    <div className="collapse show" id="module1-collapse">
                        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                            <li><a href="#" className="link-dark d-inline-flex text-decoration-none rounded card card-body p-3 mt-1 tw-bg-primary tw-bg-opacity-40" onClick={this.view}>Submodule - 1.1</a></li>
                            <li><a href="#" className="link-dark d-inline-flex text-decoration-none rounded card card-body p-3 mt-1 tw-bg-primary tw-bg-opacity-40" onClick={this.view2}>Submodule - 1.2</a></li>
                            <li><a href="#" className="link-dark d-inline-flex text-decoration-none rounded card card-body p-3 mt-1 tw-bg-primary tw-bg-opacity-40" onClick={this.view3}>Submodule - 1.3</a></li>
                        </ul>
                    </div>
                </li>
            </ul>
        </section>
    );
}

export default ModuleCard;
