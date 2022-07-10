import styled from "styled-components";

export const StyledForm = styled.form`
    width: 50%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-self: center;
`

export const StyledLabel = styled.label`
    opacity: 65%;
`

export const StyledInput = styled.input`
    width: 100%;
    padding: 12px 14px;
    margin: 10px 0 20px 0;
    border: none;
    border: 1px solid #DDDDDD;
    border-radius: 5px;
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