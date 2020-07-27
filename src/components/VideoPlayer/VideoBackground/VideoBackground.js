import React from 'react';
//import ReactHtmlParser from 'react-html-parser';
import style from './VideoBackground.module.css';
import IntroVideo from '../../../assets/videos/IntroVideo.mp4';
// https://player.vimeo.com/video/440258389

const videobackground = (props) => (
    
    <div className={style.introVieoWrapper}>
        <video className={style.introVideo} autoPlay={true}>
            <source src={ IntroVideo } type="video/mp4" />
        </video>
    </div>
);

export default videobackground;