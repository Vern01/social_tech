import React from 'react'

import FormBuilder from 'FormBuilder'

import BaselineContainer from 'BaselineContainer'
import Body from 'Body'
import CenterContainer from 'CenterContainer'
import Fill from 'Fill'
import FillContainer from 'FillConctainer'
import FillNone from 'FillNone'
import HDivider from 'HDivider'
import HorizontalContainer from 'HorizontalContainer'

import FeatureGroup from 'FeatureGroup'
import FormTextArea from 'FormTextArea'
import FormTextInput from 'FormTextInput'
import H1 from 'H1'
import H2 from 'H2'
import Header from 'Header'
import IconText from 'IconText'
import IconTextBox from 'IconTextBox'
import ImageGroup from 'ImageGroup'
import Intro from 'Intro'
import P1 from "P1";
import Paragraph from 'Paragraph'
import RoundBtn from 'RoundBtn'
import RoundBtnGroup from 'RoundBtnGroup'
import SwitchButton from 'SwitchButton'
import SwitchButtonGroup from 'SwitchButtonGroup'
import VerticalMenu from 'VerticalMenu'

let factory = function (component) {
    switch (component.toLowerCase()) {
        case "formbuilder":
            return FormBuilder;
        case "baselinecontainer":
            return BaselineContainer;
        case "body":
            return Body;
        case "centercontainer":
            return CenterContainer;
        case "fill":
            return Fill;
        case "fillcontainer":
            return FillContainer;
        case "fillnone":
            return FillNone;
        case "hdivider":
            return HDivider;
        case "horizontalcontainer":
            return HorizontalContainer;
        case "featuregroup":
            return FeatureGroup;
        case "formtextarea":
            return FormTextArea;
        case "formtextinput":
            return FormTextInput;
        case "h1":
            return H1;
        case "h2":
            return H2;
        case "header":
            return Header;
        case "icontext":
            return IconText;
        case "icontextbox":
            return IconTextBox;
        case "imagegroup":
            return ImageGroup;
        case "intro":
            return Intro;
        case "p1":
            return P1;
        case "paragraph":
            return Paragraph;
        case "roundbtn":
            return RoundBtn;
        case "roundbtngroup":
            return RoundBtnGroup;
        case "switchbutton":
            return SwitchButton;
        case "switchbuttongroup":
            return SwitchButtonGroup;
        case "verticalmenu":
            return VerticalMenu;
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