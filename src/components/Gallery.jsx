import React from 'react'
// import logo from './logo.svg';
import Iframe from 'react-iframe'

   
const Gallery = () => ( 
    <div> 
        <Iframe src="https://public.flourish.studio/visualisation/345596/embed?auto=1"
            width="100%"
            height="800px"
            display="initial"
            position="relative"
            scrolling='no'
        />
    </div>

);

export default Gallery;
