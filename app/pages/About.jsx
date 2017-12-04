import React from 'react'
import RoundBtn from 'RoundBtn'


const Test = ({array}) => (
    <div>
        {array.map((ar, id) => (
            <h1 key={id}>{ar}</h1>
        ))}
    </div>
);

const array = ["This is a test.", "Testing one two."];

const comp = [Test]

const func = function () {
    return RoundBtn
};

class About extends React.Component {
    render() {
        let Comp = func();
        return (
            <div className={"body"}>
                <Comp>This is test</Comp>
            </div>
        );
    }
}

export default About;