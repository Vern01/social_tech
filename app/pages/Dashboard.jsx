import React from 'react'

import RecursivePageBuilder from 'RecursivePageBuilder'

let array = {
    name: "body",
    data: "",
    children: [{
        name: "CenterContainer",
        data: {styles: {minHeight: "100%"}},
        children: [{
            name: "h1",
            data: {text: "My Dashboard"}
        }, {
            name: "SwitchButtonGroup",
            data: {buttons: ["My Account Info", "Previous Orders", "Active Orders"], links: ["", "", ""]}
        }, {
            name: "TwoListGroup",
            data: {left: ["Lego Piece", "Chair", "Lorem", "Ipsum", "Tabel"], right: ["View Order", "View Order", "View Order", "View Order", "View Order"]}
        }]
    }]
};

class Dashboard extends React.Component {
    render() {
        return (
          <RecursivePageBuilder root={array}/>
        );
    }
}

export default Dashboard;