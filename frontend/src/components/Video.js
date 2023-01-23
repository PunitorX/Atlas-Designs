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
  /* justify-content: center; */
  align-items: center;
  margin-top: 3rem;
`

const VideoChips = styled.div`
  color: #fff;
  display: flex;
  gap: 25px;
  padding-bottom: 2rem;
`

const VideoHeaders = styled.section`
  text-align: center;
  font-family: 'Roboto Slab', sans-serif;
  color: ${color.ColorTwo};
  margin: 0 10rem;
  padding: 0 10rem;
`

const VideoHeader = styled.h1`
  font-size: 1.8rem;
  letter-spacing: 1.4px;
`

const VideoHeaderTwo = styled.h3`
  font-weight: 200;
  padding: 0 3rem;
  line-height: 35px;
  /* letter-spacing: 1px; */
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
              Explore through endless parts and assecories to suit your needs and desires for you personal computer. Build the computer you've always dreamed about.
              </VideoHeaderTwo>
            </VideoHeaders>
            
            <SearchBar />
          </VideoContent>

        </VideoOverlay>
    </VideoMedia>
  )
}

export default Video