import { useState } from 'react'

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
            <div className="container invitationContainer">
                <h2 className="heading invitationHeading">Don't know where to start your journey to financial fitenss?</h2><br></br>

                <p className="invitationText">We're Servus, a national community of bankers, and we'd like to help</p><br></br>

                <button className="button invitationButton" onClick={ () => setAppStage( 'schedule' ) }>Schedule an appointment with one of our finance experts today</button>
            </div>
        )
    }

    else if ( appStage === 'schedule' ) {
        return (
            <Schedule onFormSubmit={ onFormSubmit }/>
        )
    }

    else if ( appStage === 'extra_info' ) {
        return (
            <ExtraInfo onEnd={ onEnd }/>
        )
    }

    else {
        return (
            <ThankYou />
        )
    }
}

export default App;
