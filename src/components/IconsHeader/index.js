import styled from 'styled-components';

const icon = 'https://avatars.githubusercontent.com/u/51383232?s=400&u=edd99b767e22ebef57ac67d16819472a208ed086&v=4';

const Icon = styled.li`
    margin-right: 40px;
    width: 25px;
    cursor: pointer;

    @media (max-width: 600px) {
        margin-right: 20px;
    }
`;

const Icons = styled.ul`
    display: flex;
    align-items: center;
`;

const IconImg = styled.img`
    width: 250%;
    height: 100%;
    border-radius: 50%;

    @media (max-width: 600px) {
        width: 200%;
    }
`;

const Link = styled.a`
    text-decoration: none;
    color: inherit;
    display: flex;
`;
export default function IconsHeader({ onSelect }) {
    return (
        <Icons>
            <Icon>
                <Link href="#curriculo" onClick={(e) => { e.preventDefault(); onSelect && onSelect('curriculo'); }}>
                    <IconImg src={icon} alt='' />
                </Link>
            </Icon>
        </Icons>
    )
}
