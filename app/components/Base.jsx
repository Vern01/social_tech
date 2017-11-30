import React from 'react'

import Header from 'Header'
import Body from 'Body'

class Base extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Body>

                </Body>
                <div className="footer divider-border"></div>
            </div>
        );
    }
}

export default Base;