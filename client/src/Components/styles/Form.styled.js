import styled from "styled-components";

export const StyledForm = styled.form`
    width: 60%;
    min-width: 300px;
    padding: 30px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-self: center;
    border: 1px solid #ddd;
    border-radius: 5px;
    background: #F1F1F0;
`

export const StyledLabel = styled.label`
    opacity: 65%;
`

export const StyledInput = styled.input`
    width: ${({width}) => width || '100%'};
    padding: 12px 14px;
    border: none;
    border: 1px solid #DDDDDD;
    border-radius: 6px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

    &::placeholder {
        opacity: 65%;
    }

    &:focus{
    border: none;
    border-radius: 0;
    outline: 1px solid #21ACD6
}
`