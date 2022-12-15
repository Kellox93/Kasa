import { Link } from 'react-router-dom'
import './styles/error.css'

function Error() {
    return (
        <div className="error">
            <h1 className='titreError'>404</h1>
            <p className='oups'>Oups! La page que vous demandez n'existe pas.</p>
            <Link key="retourHome" to="/">
                <p className='retour'>Retourner sur la page d’accueil</p>
            </Link>
        </div>
    )
}
 
export default Error