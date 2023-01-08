import { useState } from "react"

import ExtraInfo from "./extra_info"
import Schedule from "./schedule"
import ThankYou from "./thank_you"

enum AppStage {
  Invitation,
  ExtraInfo,
  ThankYou,
  Schedule
}

function App() {
  const [appStage, setAppStage] = useState(AppStage.Invitation)

  const onFormSubmit = (e: Event) => {
    e.preventDefault()
    setAppStage(AppStage.ExtraInfo)
  }

  const onEnd = (e: Event) => {
    e.preventDefault()
    setAppStage(AppStage.ThankYou)
  }

  switch (appStage) {
    case AppStage.Invitation: {
      return (
        <div className="container invitationContainer">
          <h2 className="heading invitationHeading">
            Don't know where to start your journey to financial fitenss?
          </h2>
          <br></br>

          <p className="invitationText">
            We're Servus, a national community of bankers, and we'd like to help
          </p>
          <br></br>

          <button
            className="button invitationButton"
            onClick={() => setAppStage(AppStage.Schedule)}>
            Schedule an appointment with one of our finance experts today
          </button>
        </div>
      )
    }

    case AppStage.Schedule: {
      return <Schedule onFormSubmit={onFormSubmit} />
    }
    case AppStage.ExtraInfo: {
      return <ExtraInfo onEnd={onEnd} />
    }
    case AppStage.ThankYou: {
      return <ThankYou />
    }
  }
}

export default App
