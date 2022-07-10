import React from 'react'
import { Container } from '../Components/styles/Container.styled'
import { StyledForm, StyledInput, StyledLabel } from './styles/Form.styled'
import { Button } from './styles/Button.styled'

function Signup() {
    return (
        <>
            <Container>
                <h1 style={{textAlign:'center',margin:'60px 0 40px 0'}}>Sign Up</h1>
                <StyledForm>
                    <StyledLabel>Username</StyledLabel>
                    <StyledInput type='text' ref={emailRef}
                    // placeholder='Username'
                    />
                    <StyledLabel>Password</StyledLabel>
                    <StyledInput type='password' ref={passwordRef}
                    // placeholder='Password'
                    />
                    <StyledLabel>Password Confirmation</StyledLabel>
                    <StyledInput type='password' ref={passwordRef}
                    // placeholder='Confirm Password'
                    />
                    <Button bg='#65ACA8' color='#fff'>Sign Up</Button>
                </StyledForm>
                <div style={{textAlign:'center', marginTop:'20px', opacity:'65%'}}>Already have an account? <a href="#">Login</a></div>
            </Container>
        </>
    )
}

export default Signup