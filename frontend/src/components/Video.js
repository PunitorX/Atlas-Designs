import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import VideoI from '../../src/Videos/videoOne.mp4'
import VideoII from '../../src/Videos/videoTwo.mp4'
import { color } from '../GlobalColors'
import SearchBar from './SearchBar'
import VideoChip from './VideoChip'
import BookData from '../Data/Data.json'

const VideoMedia = styled.section`
  height: 550px;
  width: 100%;
  padding: 0;
  margin: 0;
`

const VideoOverlay = styled.div`
  height: inherit;
  width: 100%;
  position: relative;
  display: block;
`

const VideoContainer = styled.video`
  object-fit: fill;
  width: 100%;
  height: inherit;
  position: absolute;
`

const VideoContent = styled.div`
  height: inherit;
  width: 100%;
  z-index: 999;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const VideoChips = styled.div`
  display: flex;
  gap: 25px;
  padding-top: 3rem;
  padding-bottom: 1rem;
`

const VideoHeaders = styled.section`
  text-align: center;
  font-family: 'Roboto Slab', sans-serif;
  margin: 0 10rem;
  padding: 0 10rem;
`

const VideoHeader = styled.h1`
  font-size: 2.2rem;
  letter-spacing: 1.4px;
  text-transform: capitalize;
  color: ${color.ColorSeven};
`

const VideoHeaderTwo = styled.h3`
  color: ${color.ColorTwo};
  font-size: 1.2rem;
  font-weight: 200;
  padding: 0 5rem;
  line-height: 35px;
  letter-spacing: 1px;
`

function Video({src, isMuted}) {
    const refVideo = useRef(null)

    useEffect(() => {
        if(!refVideo.current) {
            return
        }

        if(isMuted) {
            //open bug since 2017 that you cannot set muted in video element https://github.com/facebook/react/issues/10389
            refVideo.current.defaultMuted = true
            refVideo.current = true
        }

        refVideo.current.srcObject = src
    }, [src])

 return (
    <VideoMedia>
        <VideoOverlay>
          <VideoContainer autoPlay ref={refVideo} muted  loop>
            <source src={VideoII} type='video/mp4'/>
          </VideoContainer>

          <VideoContent>
            <VideoChips>
              <VideoChip />
              <VideoChip />
              <VideoChip />
              <VideoChip />
              <VideoChip />
              <VideoChip />
            </VideoChips>
            <VideoHeaders>
              <VideoHeader>
                Build your dream computer
              </VideoHeader>
              <VideoHeaderTwo>
              Explore through endless parts and accessories to suit your needs and desires for your personal computer. Build the computer you've always dreamed about.
              </VideoHeaderTwo>
            </VideoHeaders>
            
            <SearchBar data={BookData} />
          </VideoContent>

        </VideoOverlay>
    </VideoMedia>
  )
}

export default Video