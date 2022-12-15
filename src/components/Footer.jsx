import logo from './assets/LOGOBLANC.svg'
import './styles/Footer.css'

function Footer () {
    return (
        <footer>
        <img className="logoFooter" src={logo} alt="logo"/>
        <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer