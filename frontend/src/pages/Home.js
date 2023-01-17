import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'
import ProductCard from '../components/Cards/ProductCard'
import { productArray } from '../Data/ProductData'
import { device } from '../DeviceSize'

const Body = styled.body`
  height: auto;
  margin: 0 2rem;
  padding: 0 2rem;

  @media ${device.laptop} {
    padding: 0 1rem;
  }

  @media ${device.mobileL} {
    padding: 0 1rem;
    margin: 0 1rem;
  }

  @media ${device.mobileM} {
    padding: 0 1rem;
    margin: 0 1rem;
  }

  @media ${device.mobileS} {
    padding: 1rem .5rem;
  }
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

  @media ${device.mobileM} {
    display: flex;
    flex-direction: column;
    padding-bottom: 1rem;
  }

  @media ${device.mobileS} {
    display: flex;
    flex-direction: column;
    padding-bottom: 1rem;
  }
`

const SectionTitle = styled.h2`
  color: #2C3333;
  font-family: 'Roboto Slab', sans-serif;
  font-size: 1.8rem;
  text-transform: uppercase;
  letter-spacing: 1px;

  @media ${device.mobileL} {
    font-size: 1.6rem;
  }

  @media ${device.mobileM} {
    font-size: 1.4rem;
  }

  @media ${device.mobileS} {
    font-size: 1.2rem;
  }
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

  @media ${device.tablet} {
    font-size: 1rem;
  }

  @media ${device.mobileL} {
    font-size: .8rem;
  }

  @media ${device.mobileM} {
    font-size: .8rem;
  }

  @media ${device.mobileS} {
    font-size: .8rem;
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
            {/* <ProductCard />
            <ProductCard /> */}
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