import React from 'react'

const Test = ({array}) => (
    <div>
        {array.map((ar, id) => (
            <h1 key={id}>{ar}</h1>
        ))}
    </div>
);

const array = ["This is a test.", "Testing one two."];

class About extends React.Component {
    render() {
        return (
            <Test array={array}/>
        );
    }
}

export default About;