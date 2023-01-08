import FarhanImage from '../assets/Farhan.png'
import JohnImage from '../assets/John.png'
import JoshImage from '../assets/Josh.png'

const HumanFaces = () => (
    <div className="humanFacesContainer">
        <HumanFace img={ FarhanImage } name="Farhan Tajwar Romit" role="Investment Analyst"/>
        <HumanFace img={ JohnImage } name="John Matthew Wilburn" role="Mortgage Specialist"/>
        <HumanFace img={ JoshImage } name="Josh Klopfenstein" role="Financial Advisor"/>
    </div>
)  

const HumanFace = ( { name, role, img } ) => (
    <div className="humanFaceColumn">
        <img width="100" height="100" src={ img }></img>
        <p className="humanFaceName">{ name }</p>
        <p className="humanFaceJob">{ role }</p>
    </div>
)

export default HumanFaces