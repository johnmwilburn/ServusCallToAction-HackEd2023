const ExtraInfo = ({ onEnd }) => (
    <div className="container extraInfoContainer">
        <form onSubmit={ onEnd }>
            <label className="extraInfoPrompt" htmlFor="extraInfo"><strong>Any additional info you want to share?</strong></label><br />
            <textarea id="extraInfo" name="extraInfo" /><br />

            <button type="submit" className="button extraInfoButton">Submit</button>
        </form>
    </div>
)

export default ExtraInfo