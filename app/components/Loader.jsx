import React from 'react'

class Loader extends React.Component {
    render() {
        return (
            <div className="shadow-background">
                <div class="loader">
                    <div class="bounce1"/>
                    <div class="bounce2"/>
                    <div class="bounce3"/>
                </div>
            </div>
        );
    }
}

export default Loader;