import styled from "styled-components";

export const Button = styled.button`
    width: 100%;
    padding: 12px 20px;
    border-radius: 5px;
    border: none;
    background: ${({bg}) => bg || '#fff'};
    color: ${({color}) => color};
    font-weight: bold;
    text-transform: uppercase;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

    &:hover {
        opacity: 95%;
        
    }
`