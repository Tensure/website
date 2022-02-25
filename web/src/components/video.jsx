import React from 'react'

export default function Video ({videoSrc, videoTitle, ...props}) {
  return (
    <div>
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
