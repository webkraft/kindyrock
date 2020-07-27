import React from 'react';
import styles from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';
import VideoTypeControl from './BuildControl/VideoTypeControl';

const videoCategoryControls = [
    
    {label: 'Babies', type:'babies', classname: 'babies'},
    {label: 'Toddlers', type:'toddlers', classname: 'toddlers'},
    {label: 'Pre-Schoolers', type:'preschoolers', classname: 'preschoolers'},
    {label: 'Young Children', type:'youngchildren', classname: 'youngchildren'},
];

const videoTypeControls = [
    
    {label: 'Learn', type:'learn', classname: 'learn'},
    {label: 'Watch', type:'watch', classname: 'watch'},
    {label: 'Listen', type:'listen', classname: 'listen'},
];

//functional component that recieves props and returns jsx
//access the object above

/*
-- Add or remove video categories
*/
const buildControls = (props) => (
    
    <div>
    <div className={styles.BuildControlsWrapper}>
        {videoCategoryControls.map(videoCategory => (

            props.videoCategoryState === null ?
            <BuildControl
            key={videoCategory.label}
            classname={videoCategory.classname}
            added={() => props.videoCategorySelected(videoCategory.label)}
            disabled = {props.disabled[videoCategory.type]} />
            : <div key={videoCategory.label}></div>
        ))}
    </div>
    <div className={styles.BuildControlsWrapper}>
        {videoTypeControls.map(videoType => (
            
            props.videoTypeState === null && props.videoCategoryState != null?
            <VideoTypeControl
            key={videoType.label}
            classname={videoType.classname}
            added={() => props.videoTypeSelected(videoType.label)}            
            disabled = {props.disabled[videoType.type]} />
            : <div key={videoType.label}></div>
        ))}
    </div>
    </div>
);

export default buildControls;

/*

label={ctrl.label}
<p>Category selection</p>

<div>
<h2>Testing data</h2>
<p>Loop through state data</p>
</div>

<button
        className={classes.OrderButton}
        disabled={!props.purchaseable}
        onClick={props.ordered}>
            Order NOW
        </button>
*/