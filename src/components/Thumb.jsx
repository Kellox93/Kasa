import './styles/Thumb.css'
import { Link } from 'react-router-dom'

function Thumb({ id, title, cover}) {
    
    return (
        <div key={id} className="Thumb">
            <Link to={"logement/" + id}>
                <img src= {cover} alt="appartement" className='coverLogement'/>
                <div className='degrader'></div>
                <h2>{title}</h2>
            </Link>
        </div>
    )
}

export default Thumb