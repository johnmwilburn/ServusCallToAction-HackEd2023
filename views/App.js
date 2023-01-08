import { useState } from 'react'

import HumanFaces from './human_faces'
import Schedule from './schedule'
import ExtraInfo from './extra_info'
import ThankYou from './thank_you'

const TOPICS = {
    0: 'none',
    1: 'budget',
    2: 'tax',
    3: 'debt'
}

function App() {
    const [ appStage, setAppStage ] = useState( 'invitation' )
    const [ firstName, setFirstName ] = useState( '' )
    const [ lastName, setLastName ] = useState( '' )
    const [ email, setEmail ] = useState( '' )
    const [ topic, setTopic ] = useState( TOPICS[0] )
    const [ extraInfo, setExtraInfo ] = useState( '' )

    const onFormSubmit = e => {
      e.preventDefault()

      setAppStage( 'extra_info' )
      setFirstName( e.target[0].value )
      setLastName( e.target[1].value )
      setEmail( e.target[2].value )

      if ( e.target[3].checked )
        setTopic( TOPICS[1] )

      else if ( e.target[4].checked )
        setTopic( TOPICS[2] )

      else if ( e.target[5].checked )
        setTopic( TOPCIS[3] )
    }

    const onEnd = e => {
        e.preventDefault()
        setExtraInfo( e.target[0].value )
        setAppStage( 'thank_you' )
    }

    if ( appStage === 'invitation' ) {
        return (
            <div className="horizontal-divider">
                <div className="container invitationContainer">
                    <h2 className="heading invitationHeading">Don't know where to start on your journey to financial fitness?</h2><br></br>

                    <p className="invitationText">Let us help!</p><br></br>

                    <HumanFaces />
                    
                    <button className="button invitationButton" onClick={ () => setAppStage( 'schedule' ) }>Schedule an appointment with one of our finance experts today</button>
                </div>
            </div>
        )
    }

    else if ( appStage === 'schedule' ) {
        return (
            <div className="horizontal-divider">
            <Schedule onFormSubmit={ onFormSubmit }/>
            </div>
        )
    }

    else if ( appStage === 'extra_info' ) {
        return (
            <div className="horizontal-divider">
            <ExtraInfo onEnd={ onEnd }/>
            </div>
        )
    }

    else {
        return (
            <div className="horizontal-divider">
            <ThankYou />
            </div>
        )
    }
}

export default App;
