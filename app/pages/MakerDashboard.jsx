import React from 'react'

import RecursivePageBuilder from 'RecursivePageBuilder'

let array = {
    name:"body",
    data:"",
    children: [{
        name: "CenterContainer",
        data:"",
        children: [{
            name:"H1",
            data:{text: "Maker Dashboard"}
        }, {
            name:"SwitchButtonGroup",
            data:{buttons: ["Account Info", "Designs", "Orders"], links: ["", "", "Dashboard"]}
        }, {
            name:"FillContainer",
            data:"",
            children: [{
                name:"FillNone",
                data:"",
                children: [{
                    name:"VerticalMenu",
                    data:{tabs: ["New", "Improved", "Decline"]}
                }]
            }, {
                name:"Fill",
                data:"",
                children:[{
                    name:"ImageGroup",
                    data:{images: ["", "", "", "", "", "", "", "", "", "", "", "", ""]}
                }]
            }]
        }]
    }]
};

class MakerDashboard extends React.Component {
    render() {
        return (
            <RecursivePageBuilder root={array} />
        );
    }
}

export default MakerDashboard;