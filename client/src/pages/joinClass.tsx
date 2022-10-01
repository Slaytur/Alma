import { join } from 'path'
import React from 'react'

var classCode; 

class JoinClass extends React.Component 
{
    render = (): React.ReactNode =>
    (
        <div className="tw-text-center">
            <form>
                <input type="text">

                </input>

                <input type="submit">
                    Join
                </input>
            </form>
        </div>
    )
}

export default JoinClass;