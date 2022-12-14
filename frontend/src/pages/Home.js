import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'
import ProductCard from '../components/Cards/ProductCard'
import { productArray } from '../Data/ProductData'

const Body = styled.body`
  height: auto;
  margin: 0 2rem;
  padding: 1rem;
`

const BodyContainer = styled.div`
  
`

const BodySection = styled.section`
  height: auto;
`

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const SectionTitle = styled.h2`
  color: #2C3333;
  font-family: 'Roboto Slab', sans-serif;
  font-size: 1.8rem;
  text-transform: uppercase;
  letter-spacing: 1px;
`
const SectionView = styled.a`
  cursor: pointer;
  letter-spacing: .5px;
  font-family: 'Montserrat', sans-serif;
  font-weight:600 ;

  &:after {
  content: '';
	display: block;
	margin: auto;
	height: 3px;
	width: 0px;
	background: transparent;
	transition: width .5s ease, background-color .5s ease;
  }

  &:hover:after {
    width: 100%;
    background: #395B64;
  }
`

const SectionCard = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

const Home = () => {
  return (
    <Body>
      <BodyContainer>
        <BodySection>
          <SectionHeader>
            <SectionTitle>Trending Parts</SectionTitle>
            <SectionView>
              View More
              <FontAwesomeIcon icon={faAngleRight} size={'xs'} transform={'down-2, right-2'}/>
            </SectionView>
          </SectionHeader>
          <SectionCard>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </SectionCard>
        </BodySection>

        <BodySection>
          <SectionHeader>
            <SectionTitle>Recent Builds</SectionTitle>
            <SectionView>
              View More
              <FontAwesomeIcon icon={faAngleRight} size={'xs'} transform={'down-2, right-2'}/>
            </SectionView>
          </SectionHeader>
        </BodySection>

        <BodySection>
          <SectionHeader>
            <SectionTitle>Our Best Deals</SectionTitle>
            <SectionView>
              View More
              <FontAwesomeIcon icon={faAngleRight} size={'xs'} transform={'down-2, right-2'}/>
            </SectionView>
          </SectionHeader>
        </BodySection>
      </BodyContainer>
    </Body>
  )
}

export default Home