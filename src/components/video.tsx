/* eslint-disable react/display-name */
import {useEffect, useRef, useState} from 'react'
import videojs from 'video.js'
import {useVisible} from 'react-hooks-visible'
import React from 'react'

export const Video = React.memo(({src}: {src: string}) => {
  const videoRef = useRef(null)
  const [player, setPlayer] = useState<any>(null)
  const [ref, visible] = useVisible((vi: number) => vi > 0.3)

  // This seperate functional component fixes the removal of the videoelement
  // from the DOM when calling the dispose() method on a player
  const VideoHtml = useRef(
    <div data-vjs-player ref={ref as any}>
      <video
        muted
        ref={videoRef}
        className="video-js vjs-big-play-centered"
        playsInline
        style={{
          height: '70vh',
          // aspectRatio: '6/13', // I Phone X
          borderRadius: 10,
          width: 'calc(70vh * .4615)',
        }}
      />
    </div>
  )

  useEffect(() => {
    const videoElement = videoRef.current

    if (videoElement) {
      setPlayer(
        videojs(
          videoElement,
          {
            //autoplay: 'muted',
            controls: true,
            controlBar: {
              volumePanel: false,
            },
            responsive: false,
            fluid: false,
            loop: true,
            height: 800,
            playbackRates: [1, 2, 4, 8],
            sources: [
              {
                src,
                type: 'application/x-mpegurl',
              },
            ],
          },
          () => {
            // console.log('player is ready')
          }
        )
      )
    }
    return () => {
      if (player) {
        player.dispose()
      }
    }
  }, [src])

  // given the visible hook fires,
  // play video only when in the viewport
  useEffect(() => {
    if (player) {
      if (!visible && !player.paused()) {
        player.pause()
      }

      if (visible && player.paused()) {
        player.play()
      }
    }
  }, [visible, player])

  return VideoHtml.current
})
