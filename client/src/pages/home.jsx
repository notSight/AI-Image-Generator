import React from 'react'
import styled from 'styled-components'
import SearchBar from '../components/SearchBar'
import ImageCard from '../components/ImageCard'

const Container = styled.div`
  height: 100%;
  overflow-y: scroll;
  background-color: ${({ theme }) => theme.bg};
  transition: all 0.2s ease;
  padding: 30px 30px;
  padding bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  @media  (max-width: 768px) {
    padding: 6px 10px;
  }
  `
  const Headline = styled.div`
    font-size: 34px;
    font-weight: 500;
    color: ${({ theme }) => theme.text_primary};
    display: flex;
    flex-direction: column;
    align-items: center;
    
    @media (max-width: 600px) {
      font-size: 22px;
    }
  `
  const Span = styled.div`
    font-size: 30px;
    font-weight: 800;
    color: ${({ theme }) => theme.secondary};
    @media (max-width: 600px) {
      font-size: 20px;
    }
  `
  const Wrapper = styled.div`
    width: 100%;
    max-width: 1400px;
    padding 32px 0px;
    display: flex;
    justify-content: center;
    alighn-items: center;
  `
  const CardWrapper = styled.div`
    display: grid;
    gap: 20px;

    @media (min-width: 1200px) {
      grid-template-columns: repeat(4, 1fr);
    }

    @media (min-width: 640px) and (max-width: 1199px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 639px) {
      grid-template-columns: repeat(2, 1fr);
    }
  `
const home = () => {
  const item = {
    photo: "https://th.bing.com/th/id/OIP.oJET9p30ldBbkuaC7sB1DgHaFj?w=240&h=180&c=7&r=0&o=5&pid=1.7",
    prompt: "A beautiful sunset over the mountains",
    author: "A",
  }
  return (
    <Container>
      <Headline>
        Explore popular posts in the Community!
        <Span>Generated with AI</Span>
      </Headline>
      <SearchBar />
      <Wrapper>
        <CardWrapper>
          <ImageCard item = {item}/>
          <ImageCard item = {item}/>
          <ImageCard item = {item}/>
          <ImageCard item = {item}/>
          <ImageCard item = {item}/>
          <ImageCard item = {item}/>
          <ImageCard item = {item}/>
          <ImageCard item = {item}/>
          <ImageCard item = {item}/>
          <ImageCard item = {item}/>
        </CardWrapper>
      </Wrapper>
    </Container>
  )
}

export default home