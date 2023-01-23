import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import VideoII from '../../src/Videos/videoTwo.mp4'
import { color } from '../GlobalColors'
import SearchBar from './SearchBar'
import VideoChip from './VideoChip'

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
  justify-content: center;
  align-items: center;
`

const VideoChips = styled.div`
  color: #fff;
  display: flex;
  gap: 25px;
  padding-bottom: 2rem;
`

const VideoHeader = styled.h1`
  font-size: 1.8rem;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 1.4px;
  color: ${color.ColorTwo};
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
            <VideoHeader>
              Build your dream computer
            </VideoHeader>
            <SearchBar />
          </VideoContent>

        </VideoOverlay>
    </VideoMedia>
  )
}

export default Video