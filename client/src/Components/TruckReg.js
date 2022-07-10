import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { Container } from '../Components/styles/Container.styled'
import { StyledForm, StyledInput, StyledLabel } from './styles/Form.styled'
import { Button } from './styles/Button.styled'

const TruckReg = () => {
    const truckNameRef = useRef()
    const truckIdRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()

    return (
        <div>
            <Container>
                <StyledForm style={{marginTop:'60px'}}>
                <h1 style={{textAlign:'center', margin:'0 0 40px 0', opacity:'65%'}}>Register Truck</h1>
                    <StyledLabel>Truck Name</StyledLabel>
                    <StyledInput type='text' ref={truckNameRef}
                    // placeholder='Username'
                    />
                    <StyledLabel>Truck ID</StyledLabel>
                    <StyledInput type='text' ref={truckIdRef}
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
                    <Button bg='#65ACA8' color='#fff'>Register</Button>
                </StyledForm>
                <div style={{textAlign:'center', marginTop:'20px', opacity:'65%'}}>Already Registered <Link to={'/registration/truck'}>Login</Link></div>
                <div style={{textAlign:'center', marginTop:'20px', opacity:'65%'}}>Wait I don't belong here! <Link to={'/'}>Sign up</Link></div>
                
            </Container>
        </div>
    )
}

export default TruckReg