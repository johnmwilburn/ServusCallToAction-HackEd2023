const Schedule = ({ onFormSubmit }) => {
    return (
        <>
            <h1 className="scheduleHeading">We're so glad you chose us!</h1>
            <p className="scheduleText">Schedule a time and date to meet with one of our awesome representatives</p> 

            <div className="scheduleFormContainer">
            <form className="scheduleForm" onSubmit={ onFormSubmit }>

                <label for="firstName">First Name:</label>
                <input required type="text" id="firstName" name="firstName" />

                <label for="lastName">Last Name:</label>
                <input required type="text" id="lastName" name="lastName" />

                <label for="email">Email:</label>
                <input required type="email" id="email" name="email" />

                <input required type="radio" id="budget" name="topic" value="budget"/>
                <label for="budget">Making a budget</label><br/>

                <input type="radio" id="tax" name="topic" value="tax"/>
                <label for="tax">Filing your taxes</label><br/>

                <input type="radio" id="debt" name="topic" value="debt"/>
                <label for="debt">Paying off credit card debt</label><br/>

                <label for="extraInfo">Anything particular you wanted to talk about?</label>
                <textarea id="extraInfo" name="extraInfo" />

                <input type="submit" />
                
            </form>
            </div>
        </>
    )
}

export default Schedule