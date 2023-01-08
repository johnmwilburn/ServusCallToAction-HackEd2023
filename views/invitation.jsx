import Schedule from './schedule'
import ThankYou from './thank_you'

import { useState } from 'react'

function Invitation () {
    const [ appStage, setAppStage ] = useState( 'invitation' )

    const onFormSubmit = e => {
        e.preventDefault()
        setAppStage( 'thank_you' )
    }

    if ( appStage === 'invitation' ) {
        return (
            <div className="invitationDiv">
                <h2 className="invitationHeading">Don't know where to start your journey to financial fitenss?</h2> 

                <p className="inviationText">We're Servus,a national community of bankers, and we'd like to help</p>

                <button className="invitationButton" onClick={ () => setAppStage( 'schedule' ) }>Schedule an appointment with one of our finance experts today</button>
            </div>
        )
    }

    else if ( appStage === 'schedule' ) {
        return (
            <Schedule onFormSubmit={ onFormSubmit }/>
        )
    }

    else {
        return (
            <ThankYou />
        )
    }
 }


export default Invitation;