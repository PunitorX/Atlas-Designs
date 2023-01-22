import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import VideoI from '../../src/Videos/videoTwo.mp4'

const VideoMedia = styled.div`
  height: 550px;
  width: 100%;
  padding: 0;
  margin: 0;
`

const VideoContainer = styled.video`
  object-fit: fill;
  width: 100%;
  height: inherit;
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
        <VideoContainer autoPlay ref={refVideo} muted  loop>
        <source src={VideoI} type='video/mp4'/>
        </VideoContainer>
    </VideoMedia>
  )
}

export default Video