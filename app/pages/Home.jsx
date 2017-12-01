import React from 'react';

import CenterContainer from 'CenterContainer'
import HDivider from 'HDivider'
import H1 from 'H1'
import Paragraph from 'Paragraph'

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
                    <CenterContainer></CenterContainer>
                </HDivider>
                <HDivider style={{minHeight: "38%"}}>
                </HDivider>
                <HDivider style={{minHeight: "17%"}}>
                </HDivider>
            </div>
        );
    }
}

export default Home;