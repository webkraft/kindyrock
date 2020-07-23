import React from 'react';
import Iframe from 'react-iframe'

//Component is the building block of the main app
/*
//import React, { Component } from 'react';
class VideoPlayer extends Component{
}
*/

//Video player wrapper - insert the Vimeo IDs
const videoplayer = (props) => (
    <div>
        <Iframe url={"https://player.vimeo.com/video/" + props.vimeo_id}
        width="640"
        height="360"
        id="myId"
        frameborder="0" 
        allow="autoplay; fullscreen"
        className="myClassname"
        display="initial"
        position="relative"/>
        <hr></hr>
        <p>{props.name}</p>
    </div>
)

export default videoplayer;

/*
href={"#demo" + this.state.id}

    <h1>{props.userid}: {props.title}</h1>
    <p>{props.vimeo_id}</p>
    <p>{props.name}</p>
    <p>{props.age_group}</p>
    <p>{props.type}</p>
*/