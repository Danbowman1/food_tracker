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
        <div style={{display:'flex', justifyContent:'center',alignContent:'center'}}>
            <Container style={{height:'100vh',display:'flex', flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                <StyledForm>
                <h1 style={{textAlign:'center', margin:'0 0 40px 0', opacity:'65%'}}>Sign Up</h1>
                    <StyledLabel>Username</StyledLabel>
                    <StyledInput type='text' ref={usernameRef} style={{margin: '10px 0 20px 0'}}
                    // placeholder='Username'
                    />
                    <StyledLabel>Email</StyledLabel>
                    <StyledInput type='text' ref={emailRef} style={{margin: '10px 0 20px 0'}}
                    // placeholder='Username'
                    />
                    <StyledLabel>Password</StyledLabel>
                    <StyledInput type='password' ref={passwordRef} style={{margin: '10px 0 20px 0'}}
                    // placeholder='Password'
                    />
                    <StyledLabel>Password Confirmation</StyledLabel>
                    <StyledInput type='password' ref={passwordConfirmRef} style={{margin: '10px 0 40px 0'}}
                    // placeholder='Confirm Password'
                    />
                    <Button bg='#92C4C2' color='#fff'>Sign Up</Button>
                <div style={{textAlign:'center', marginTop:'20px', opacity:'65%'}}>Already have an account? <a href="#">Login</a></div>
                <div style={{textAlign:'center', marginTop:'20px', opacity:'65%'}}>Own a Truck? <Link to={'/registration/truck'}>Register</Link></div>
                </StyledForm>
            </Container>
        </div>
    )
}

export default Signup