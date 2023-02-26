import React, { useEffect } from 'react'
import { useAVToggle } from '@100mslive/react-sdk'
import {
  selectIsConnectedToRoom,
  useHMSActions,
  useHMSStore,
  selectPeers,
} from '@100mslive/react-sdk'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faMicrophoneSlash,
  faMicrophone,
  faVideo,
  faVideoSlash,
  faUserPlus,
  faArrowUpRightFromSquare,
  faMessage,
  faFaceSmile,
  faGear,
  faEllipsis,
} from '@fortawesome/free-solid-svg-icons'

function Footer() {
  const peers = useHMSStore(selectPeers)

  const userCount = peers.length

  const isConnected = useHMSStore(selectIsConnectedToRoom)
  const hmsActions = useHMSActions()

  const {
    isLocalAudioEnabled,
    isLocalVideoEnabled,
    toggleAudio,
    toggleVideo,
  } = useAVToggle()

  return (
    <div className="main_control_bg">
      <div className="main_control">
        <div className="main_controls_section">
          <div className="main_controls_button">
            <div>
              <FontAwesomeIcon icon={faUserPlus} size="4x" color="#A24936" />
              <>{userCount}</>
            </div>
            <span className="button_name">Participants</span>
          </div>
        </div>

        <div className="main_controls_section">
          <div className="main_controls_button" onClick={toggleAudio}>
            {isLocalAudioEnabled ? (
              <>
                <FontAwesomeIcon icon={faMicrophone} size="4x" color="white" />
                <span className="button_name">Mute</span>
              </>
            ) : (
              <>
                <FontAwesomeIcon
                  icon={faMicrophoneSlash}
                  size="4x"
                  color="#A24936"
                />
                <span className="button_name">Unmute</span>
              </>
            )}
          </div>
        </div>

        {/* <div className="main_controls_section">
          <div className="main_controls_button">
            {isConnected && (
              <button
                id="leave-btn"
                class="btn-danger"
                onClick={() => hmsActions.leave()}
              >
                Leave
              </button>
            )}
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default Footer
