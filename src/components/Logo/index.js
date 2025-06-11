import styled from 'styled-components';

const icon = 'https://avatars.githubusercontent.com/u/51383232?s=400&u=edd99b767e22ebef57ac67d16819472a208ed086&v=4';

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    margin-right: 40px;

    @media (max-width: 600px) {
        margin-right: 20px;
    }
`;

const LogoImg = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 10px;
`;

const LogoText = styled.span`
    color: #c9d1d9;
    font-size: 18px;
    font-weight: bold;
`;

export default function Logo() {
    return (
        <LogoContainer>
            <LogoImg src={icon} alt="Logo" />
            <LogoText>Lukas</LogoText>
        </LogoContainer>
    );
}
