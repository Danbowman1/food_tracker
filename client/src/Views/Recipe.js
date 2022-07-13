import React, { useState, useEffect } from 'react'
import Navbar from '../Components/Navbar'
import { Container } from '../Components/styles/Container.styled'

function Recipe() {

    const [ recipe, setRecipe ] = useState([])

    useEffect(()=> {
        // const recipeGetter = async () => {
        //     try {
        //         const res = await 
        //     } catch (err) {
                
        //     }
        // }
    },[])

    return (
        <div>
            <Navbar/>
            <Container>

            </Container>
        </div>
    )
}

export default Recipe