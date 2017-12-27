import React from 'react'

import RecursivePageBuilder from 'RecursivePageBuilder'

// let array = {
//     name: "body",
//     data: "",
//     children: [{
//         name: ""
//     }]
// };

class ProductView extends React.Component {
    render() {
        return (
            <RecursivePageBuilder root={array}/>
        );
    }
}