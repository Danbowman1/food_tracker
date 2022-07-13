import React from 'react'
import { Button } from './styles/Button.styled'
import { StyledInput } from './styles/Form.styled'


const Navbar = () => {
    return (
        <div style={{padding:'20px 60px', height:'60px', display:'flex', alignItems:'center',justifyContent:'space-between', boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px', background:'#92C4C2'}}>
        <div style={{flex: '1', textAlign:'center'}}>
        <Button width='200px' bg='#DC815A' color='#fff'>My Calender</Button>
        </div>
        <h1 style={{flex:'1',textAlign:'center',color: 'white',fontSize:'40px'}}>Logo</h1>
        <div style={{flex:'1', textAlign:'center'}}>
        <Button width='200px' bg='#DC815A' color='#fff'>List of Recipes</Button>
        </div>
        </div>
    )
}

export default Navbar