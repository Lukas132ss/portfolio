import styled from "styled-components";

const Options = styled.ul`
    display: flex;
    padding: 0;

    @media (max-width: 600px) {
        flex-direction: column;
        width: 100%;
    }
`;

const Option = styled.li`
    font-size: 16px;
    color: #c9d1d9;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    min-width: 120px;

    @media (max-width: 600px) {
        padding: 10px 0;
        min-width: unset;
    }
`;

const Link = styled.a`
    text-decoration: none;
    color: inherit;
    align-items: center;
    justify-content: center;
    display: flex;
    width: 100%;
    height: 150%;

    @media (max-width: 600px) {
        height: 100%;
    }
    
    &:hover {
        background-color: #30363d;
      }
`;


const textOptions = ['CURRICULO', 'SOBRE MIM', 'PROJETOS', 'CONTATO']

export default function OptionsHeader({ onSelect }) {
    return (
        <Options key='1'>
            {textOptions.map((text) => {
                const id = text.toLowerCase().replace(/\s+/g, '-');
                return (
                    <Option key={text}>
                        <Link href={`#${id}`} onClick={(e) => { e.preventDefault(); onSelect(id); }}>
                            <span>{text}</span>
                        </Link>
                    </Option>
                )
            })}
        </Options>
    )
}

