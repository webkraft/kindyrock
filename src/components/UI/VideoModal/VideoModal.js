import React from 'react';
import Aux from '../../../hoc/Aux';

import { Player } from 'video-react';
import Backdrop from '../Backdrop/Backdrop';
import style from './VideoModal.module.css';
//import IntroVideo from '../../../assets/videos/IntroVideo.mp4';


const videomodal = (props) => (    

    props.show ?

    <Aux>
        <Backdrop show={props.show} clicked={props.modalClosed}/>
        <div className={style.VideoModal}
        style={{
            transform: props.show ? 'translateY(0)': 'translateY(0)',
            opacity: props.show ? '1' : '0',
            display: props.show ? 'block' : 'none'
        }}>

        <video
        autoPlay={true}
        loop={false}
        style={{
            position: "fixed",
            width: "100%",
            left: 0,
            top: 0,
            opacity: props.videoLoading ? 0 : 1,
            transition: "opacity, 2s ease-in-out"
          }}
        >
        <source src="https://website5.sdstesting.com.au/videos/IntroVideo.mp4" type="video/mp4" />
      </video>            
        </div>
    </Aux>

    : null
);

export default videomodal;

/*
<Player>
<source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
</Player>

<iframe src="https://player.vimeo.com/video/441850375" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

*/