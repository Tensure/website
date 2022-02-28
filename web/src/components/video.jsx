import React from 'react'
import styles from './video.module.css'

export default function Video ({videoSrc, videoTitle, ...props}) {
  return (
    <div className={styles.videowrapper}>
      <iframe
        src={videoSrc}
        title={videoTitle}
        allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
        frameBorder='0'
        webkitallowfullscreen='true'
        mozallowfullscreen='true'
        allowFullScreen />
    </div>
  )
}
