import { Link } from 'react-router-dom'
import logo from './assets/LOGO.svg'
import './styles/Header.css'
 
function Header() {
    return (
        <header>
            <li><Link key='Acceuil' className='Acceuil' to="/">
                <img src={logo} alt='kasa' className='LOGO' />
            </Link></li>
            <nav className='_Nav'>
                    <li><Link key='Acceuil' className='Acceuil' to="/">Accueil</Link></li>
                    <li><Link key='A-Propos' className='A-Propos' to="/a-propos">A Propos</Link></li>
            </nav>
        </header>
    )
}

export default Header