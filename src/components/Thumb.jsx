import './styles/Thumb.css'
import { Link } from 'react-router-dom'

function Thumb({ id, title, cover}) {
    console.log(id)
    return (
        <div className="Thumb">
            <Link key={id} to={"logement/" + id}>
                <img src= {cover} alt="appartement" className='coverLogement'/>
                <div className='degrader'></div>
                <h2>{title}</h2>
            </Link>
        </div>
    )
}

export default Thumb