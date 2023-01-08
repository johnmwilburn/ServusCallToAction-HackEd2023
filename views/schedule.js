const Schedule = ({ onFormSubmit }) => {
    return (
        <div className="container scheduleContainer">
            <h1 className="heading scheduleHeading">We're so glad you chose us!</h1>
            <p className="scheduleText">Schedule a time and date to meet with one of our awesome representatives</p> 

            <div className="scheduleFormContainer">
            <form className="scheduleForm" onSubmit={ onFormSubmit }>
                <div className="formGrid">
                    <div className="basicInputs">
                        <label htmlFor="firstName"><strong>First Name:</strong></label><br />
                        <input className="textInput" required type="text" id="firstName" name="firstName" /><br />

                        <label htmlFor="lastName"><strong>Last Name:</strong></label><br />
                        <input className="textInput" required type="text" id="lastName" name="lastName" /><br />

                        <label htmlFor="email"><strong>Email:</strong></label><br />
                        <input className="textInput" required type="email" id="email" name="email" /><br />
                    </div>

                    <div className="formRadioOptions">
                        <p><strong>What did you want to talk about?</strong></p>
                        <input required type="radio" id="budget" name="topic" value="budget"/>
                        <label htmlFor="budget">Making a budget</label><br/>

                        <input type="radio" id="tax" name="topic" value="tax"/>
                        <label htmlFor="tax">Filing your taxes</label><br/>

                        <input type="radio" id="debt" name="topic" value="debt"/>
                        <label htmlFor="debt">Paying off credit card debt</label><br/>
                    </div>
                </div>

                <button className="button scheduleButton" type="submit">Submit</button>

            </form>
            </div>
        </div>
    )
}

export default Schedule