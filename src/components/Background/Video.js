import React from 'react';
import styled from 'styled-components';
import video from '../../files/video.mp4'
import {Bounce} from 'react-reveal/';

const Background = styled.video`
    position: relative;
    object-fit: cover;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    :before {

}
`

const Video = () => {
    return ( 
        <Background src={video} autoPlay="autoplay" loop="loop" muted type="video/mp4"/>
    );
}
 
export default Video;