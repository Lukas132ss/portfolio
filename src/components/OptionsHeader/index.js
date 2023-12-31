import styled from "styled-components";

const Options = styled.ul`
    display: flex;
`;

const Option = styled.li`
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    min-width: 120px;
`;

const Link = styled.a`
    text-decoration: none;
    color: inherit;
    align-items: center;
    justify-content: center;
    display: flex;
    width: 100%;
    height: 150%;
    
    &:hover {
        background-color: #f0f0f0; /* Adapte a cor conforme necessário */
      }
`;


const textOptions = ['CURRICULO', 'SOBRE MIM', 'PROJETOS', 'CONTATO']

export default function OptionsHeader() {
    return (
        <Options key='1'>
            {textOptions.map((text) => (
                <Option key={text}>
                    <Link href={`#${text.toLowerCase().trim()}`}>
                        <span>{text}</span>
                    </Link>
                </Option>
            ))}
        </Options>
    )
}