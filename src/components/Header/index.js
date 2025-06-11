import styled from "styled-components";
import OptionsHeader from "../OptionsHeader";
import IconsHeader from "../IconsHeader";

const HeaderContainer = styled.header`
    background-color: #0d1117;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;

    @media (max-width: 600px) {
        padding: 10px 0;
    }
`;

export default function Header({ onSelect }) {
    return (
        <HeaderContainer>
            <OptionsHeader onSelect={onSelect} />
            <IconsHeader onSelect={onSelect} />
        </HeaderContainer>
    )
}
