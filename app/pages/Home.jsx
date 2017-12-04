import React from 'react';

import RecursivePageBuilder from 'RecursivePageBuilder'

let array = {
    "name": "body",
    "data": "",
    "children": [{
        "name": "hdivider",
        "data": {"style": "45%"},
        "children": [{
            "name": "centercontainer",
            "data": "",
            "children": [ {
                "name": "intro",
                "data": {"title": "Bringing People and Makers together.",
                    "text": "We are changing the way that you go at getting " +
                    "what you need by connecting customers to makers who have " +
                    "the skill and tools to create what you need."}
            }
            ]
        }, {
            "name": "centercontainer",
            "data": "",
            "children": [{
                "name": "roundbtngroup",
                "data": {"buttons": ["View Products", "Register as Maker/Designer"]}
            }]
        }]
    }, {
        "name": "hdivider",
        "data": {"style": "38%"}
    }, {
        "name": "hdivider",
        "data": {"style": "17%"}
    }]
};

class Home extends React.Component {
    render() {
        return (
            <RecursivePageBuilder root={array}/>
        );
    }
}

export default Home;