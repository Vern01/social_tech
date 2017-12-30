import React from 'react';
import Body from "Body";
import CenterContainer from "CenterContainer";
import FillContainer from "FillContainer";
import FillNone from "FillNone";
import Fill from "Fill";
import ImageGroup from "ImageGroup";
import VerticalMenu from "VerticalMenu";
import SearchBar from "SearchBar";

class Search extends React.Component {
    render() {
        return (
            <Body>
            <CenterContainer>
                <div style={{width: "calc(50 * var(--unit))", padding: "calc(1 * var(--unit))"}}>
                    <SearchBar data={{title: "Search"}}/>
                </div>
                <FillContainer>
                    <FillNone>
                        <VerticalMenu data={{tabs: ["Category1", "Category2", "Category3", "Category4", "Category5", "Category6"]}}/>
                    </FillNone>
                    <Fill>
                        <ImageGroup data={{images: ["", "", "", "", "", "", "", "", "", "", "", "", ""], links: []}}/>
                    </Fill>
                </FillContainer>
            </CenterContainer>
            </Body>
        );
    }
}

export default Search;