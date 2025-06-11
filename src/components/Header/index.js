import styled from "styled-components";
import OptionsHeader from "../OptionsHeader";
import IconsHeader from "../IconsHeader";

const HeaderContainer = styled.header`
    background-color: #FFF;
    display: flex;
    justify-content: center;
`;

export default function Header() {
    return (
        <HeaderContainer>
            <OptionsHeader />
            <IconsHeader />
        </HeaderContainer>
    )
}
