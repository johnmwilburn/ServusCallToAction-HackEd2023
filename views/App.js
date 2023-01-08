import { useState } from 'react'

import HumanFaces from './human_faces'
import Schedule from './schedule'
import ExtraInfo from './extra_info'
import ThankYou from './thank_you'

function App() {
  const [ appStage, setAppStage ] = useState( 'invitation' )

    const onFormSubmit = e => {
        e.preventDefault()
        setAppStage( 'extra_info' )
    }

    const onEnd = e => {
        e.preventDefault()
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
