import styled from "styled-components";

export const Button = styled.button`
    width: ${({width}) => width || '100%'};
    padding: 12px;
    border-radius: 6px;
    border: none;
    background: ${({bg}) => bg || '#fff'};
    color: ${({color}) => color};
    font-weight: bold;
    text-transform: uppercase;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

    &:hover {
        filter: brightness(0.96);
        transform: scale(0.985);
    }
`