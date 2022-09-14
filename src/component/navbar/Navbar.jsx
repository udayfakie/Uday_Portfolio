import React from 'react'
import styled from 'styled-components'




const Container = styled.div`
width: 100%;
height: 10%;
background-color: #fff;
display: flex;
justify-content: space-between;
align-items: center;
`
const Left = styled.div`
display: flex;
justify-content: space-around;
flex: 1;
align-items: center;
`
const Right = styled.div`
display: flex;
justify-content: space-around;
flex: 1;
align-items: center;
`
const Center= styled.div`
display: flex;
flex: 2;
`
const Logo = styled.h1`
font-size: 20px;
text-decoration: underline;
color: darkblue;
cursor: pointer;
`

const Menu = styled.ul`
display: flex;
list-style: none;
`
const MenuItem = styled.li`
font-size: 20px;
font-weight: bold;
margin-right: 30px;
color: gray;
cursor: pointer;
&:hover{
    color: darkblue;
}
`
const Button = styled.button`
font-weight: bold;
background-color: darkblue;
cursor: pointer;
border: 2px solid white;
color: #fff;
padding: 10px 20px;
border-radius: 10px;
&:hover{
    background-color: aliceblue;
    color: darkblue;
    border: 2px solid darkblue;
}
`




const Navbar = () => {
  return (
    <Container>
      <Left>
      <Logo>uday</Logo>
      </Left>
      <Center>
      <Menu>
        <MenuItem>Home</MenuItem>
        <MenuItem>About</MenuItem>
        <MenuItem>Service</MenuItem>
      </Menu>
      </Center>
      <Right>
        <Button>Contact</Button>
      </Right>
    </Container>
  )
}

export default Navbar
