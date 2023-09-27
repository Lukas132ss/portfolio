import styled from 'styled-components';

const icon = 'https://avatars.githubusercontent.com/u/51383232?s=400&u=edd99b767e22ebef57ac67d16819472a208ed086&v=4';

const Icon = styled.li`
    margin-right: 40px;
    width: 25px;
    cursor: pointer;
`;

const Icons = styled.ul`
    display: flex;
    align-items: center;
`;

const IconImg = styled.img`
    width: 250%;
    height: 100%;
    border-radius: 50%;
`;

export default function IconsHeader() {
    return (
        <Icons>
                <Icon><IconImg src={icon} alt=''></IconImg></Icon>
        </Icons>
    )
}