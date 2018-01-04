import React from 'react'

class ApiContainer extends React.Component {
    render() {
        return (
            <div className="api-container">
                <div className="api-box">
                    <img src="icons/facebook_logo.png" alt="" className="api-image"/>
                </div>
                <div className="api-box">
                    <img src="icons/google_logo.png" alt="" className="api-image"/>
                </div>
                <div className="api-box">
                    <img src="icons/tweeter_logo.png" alt="" className="api-image"/>
                </div>
            </div>
        );
    }
}

export default ApiContainer;