import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { Container } from '../Components/styles/Container.styled'
import { StyledForm, StyledInput, StyledLabel } from './styles/Form.styled'
import { Button } from './styles/Button.styled'

function Signup() {
    const usernameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()



    return (
        <>
            <Container style={{alignContent: 'center'}}>
                <StyledForm style={{marginTop:'240px'}}>
                <h1 style={{textAlign:'center', margin:'0 0 40px 0', opacity:'65%'}}>Sign Up</h1>
                    <StyledLabel>Username</StyledLabel>
                    <StyledInput type='text' ref={usernameRef}
                    // placeholder='Username'
                    />
                    <StyledLabel>Email</StyledLabel>
                    <StyledInput type='text' ref={emailRef}
                    // placeholder='Username'
                    />
                    <StyledLabel>Password</StyledLabel>
                    <StyledInput type='password' ref={passwordRef}
                    // placeholder='Password'
                    />
                    <StyledLabel>Password Confirmation</StyledLabel>
                    <StyledInput type='password' ref={passwordConfirmRef}
                    // placeholder='Confirm Password'
                    />
                    <Button bg='#65ACA8' color='#fff'>Sign Up</Button>
                </StyledForm>
                <div style={{textAlign:'center', marginTop:'20px', opacity:'65%'}}>Already have an account? <a href="#">Login</a></div>
                <div style={{textAlign:'center', marginTop:'20px', opacity:'65%'}}>Own a Truck? <Link to={'/registration/truck'}>Register</Link></div>
            </Container>
        </>
    )
}

export default Signup