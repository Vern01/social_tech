import React from 'react'

import RecursivePageBuilder from 'RecursivePageBuilder'

let array = {
    name: "body",
    data: "",
    children: [{
        name: "CenterContainer",
        data: {styles: {minHeight: "100%"}},
        children: [{
            name: "ModalContainer",
            data: "",
            children: [{
                name: "h2",
                data: {text: "Select a Maker to create your selected design."}
            }, {
                name: "p1",
                data: "Select a maker from the list of live quotes below"
            }, {
                name: "DesignListGroup",
                data: {images: ["icons/gallery.png", "icons/gallery.png"], titles: ["Maker 1", "Maker 2"],
                    counts: [2, 4], amounts: ["R200", "R250"]}
            }]
        }]
    }]
};

class PickMaker extends React.Component {
    render() {
        return (
            <RecursivePageBuilder root={array}/>
        );
    }
}

export default PickMaker;