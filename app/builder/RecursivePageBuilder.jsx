import React from 'react'

import BaslineContainer from 'BaselineContainer'
import Body from 'Body'
import CenterContainer from 'CenterContainer'
import HDivider from 'HDivider'
import HorizontalContainer from 'HorizontalContainer'

import FeatureContainer from 'FeatureContainer'
import H1 from 'H1'
import Header from 'Header'
import IconText from 'IconText'
import IconTextBox from 'IconTextBox'
import Intro from 'Intro'
import Paragraph from 'Paragraph'
import RoundBtn from 'RoundBtn'
import RoundBtnGroup from 'RoundBtnGroup'

let factory = function (component) {
    switch (component.toLowerCase()) {
        case "baslinecontainer":
            return BaslineContainer;
        case "body":
            return Body;
        case "centercontainer":
            return CenterContainer;
        case "hdivider":
            return HDivider;
        case "horizontalcontainer":
            return HorizontalContainer;
        case "featurecontainer":
            return FeatureContainer;
        case "h1":
            return H1;
        case "header":
            return Header;
        case "icontext":
            return IconText;
        case "icontextbox":
            return IconTextBox;
        case "intro":
            return Intro;
        case "paragraph":
            return Paragraph;
        case "roundbtn":
            return RoundBtn;
        case "roundbtngroup":
            return RoundBtnGroup;
        default:
            throw "Component does not exist => " + component;
    }
};

class RecursivePageBuilder extends React.Component {
    tree(root, id) {
        let Comp = factory(root.name);
        if (root.children) {
            return (
                <Comp key={id} data={root.data}>
                    {root.children.map((child, index) => (this.tree(child, index)))}
                </Comp>
            );
        } else {
            return (
                <Comp key={id} data={root.data}/>
            );
        }
    }
    render() {
        return (
            this.tree(this.props.root, 0)
        );
    }
}

export default RecursivePageBuilder;