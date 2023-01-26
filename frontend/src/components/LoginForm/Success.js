import React from 'react'
import styled from 'styled-components'

const SuccessPage = styled.div`
  height: 100vh;
  width: 100%;
`

const SuccessCard = styled.div`

`

const SuccessHeader = styled.h2`

`

const SuccessBody = styled.p`

`

const Success = () => {
  return (
    <SuccessPage>
      <SuccessCard>
        <SuccessHeader>Account Created!</SuccessHeader>
        <SuccessBody>Welcome to Atlas Designs. Build to your heart's delight!</SuccessBody>

      </SuccessCard>
    </SuccessPage>
  )
}

export default Success