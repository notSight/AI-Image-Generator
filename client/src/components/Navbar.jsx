import React from 'react'
import styled from 'styled-components'
import { AddRounded, ExploreRounded } from '@mui/icons-material'
import Button from './buttons'
import { useNavigate, useLocation } from 'react-router-dom'

const Container = styled.div`
  flex: 1;
  background: ${({ theme }) => theme.navbar};
  color: ${({ theme }) => theme.menu_primary_text};
  font-weight: bold;
  font-size: 22px;
  padding : 14px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
  @media only screen and (max-width: 600px) {
    padding: 10px 12px;
  }
`

export const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname.split("/");
  return (
    <Container>
      ImageAI
      {path[1] === "post" ? (
        <Button 
        onClick={() => navigate("/")}
        type={"secondary"}
        text ="Explore Posts" 
        leftIcon={
          <ExploreRounded 
            style={{
            fontSize: "18px"
            }}
          />
        }
      />
      ):(
      <Button 
        onClick={() => navigate("/post")}
        text ="Create New Post" 
        leftIcon={
          <AddRounded 
            style={{
            fontSize: "18px"
            }}
          />
        }
      />
    )}
      
    </Container>
  )
}

export default Navbar

