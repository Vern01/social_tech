import React from 'react';

import BaselineContainer from 'BaselineContainer'
import CenterContainer from 'CenterContainer'
import FeatureContainer from 'FeatureContainer'
import HDivider from 'HDivider'
import H1 from 'H1'
import HorizontalContainer from 'HorizontalContainer'
import IconText from 'IconText'
import Paragraph from 'Paragraph'
import RoundBtn from 'RoundBtn'

class Home extends React.Component {
    render() {
        return (
            <div>
                <HDivider style={{minHeight: "45%"}}>
                    <CenterContainer>
                        <div>
                            <H1>Bringing People and Makers together.</H1>
                            <Paragraph>
                                We are changing the way that you go at getting what you need
                            by connecting customers to makers who have the skill and tools
                            to create what you need.
                            </Paragraph>
                        </div>
                    </CenterContainer>
                    <CenterContainer>
                        <HorizontalContainer>
                            <RoundBtn>View Products</RoundBtn>
                            <RoundBtn>Register as Maker/Designer</RoundBtn>
                        </HorizontalContainer>
                    </CenterContainer>
                </HDivider>
                <HDivider style={{minHeight: "38%"}}>
                    <FeatureContainer title={"Feature Designs"} images={["", "", "", ""]}/>
                </HDivider>
                <HDivider style={{minHeight: "17%"}}>
                    <BaselineContainer>
                        <IconText image={""} text={"Choose you design and order"}/>
                        <IconText image={""} text={"Review generated Quotes"}/>
                        <IconText image={""} text={"Request from your preferred Maker"}/>
                    </BaselineContainer>
                </HDivider>
            </div>
        );
    }
}

export default Home;