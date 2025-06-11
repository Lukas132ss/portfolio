import styled from "styled-components";
import OptionsHeader from "../OptionsHeader";
import IconsHeader from "../IconsHeader";
import Logo from "../Logo";

const HeaderContainer = styled.header`
    background-color: #0d1117;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    padding: 0 20px;

    @media (max-width: 600px) {
        padding: 10px;
    }
`;

export default function Header({ onSelect }) {
    return (
        <HeaderContainer>
            <Logo />
            <OptionsHeader onSelect={onSelect} />
            <IconsHeader onSelect={onSelect} />
        </HeaderContainer>
    )
}
