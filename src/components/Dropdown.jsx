import './styles/Dropdown.css';
import up from './assets/up.svg'
import down from './assets/down.svg'
import { useState } from 'react';

function Dropdown({titre, contenant}) {
    
    const [isOpen, setIsOpen] = useState(false)
 
    return isOpen ? (
        <div className='dropdown'>
            <button className='action' onClick={() => setIsOpen(false)}>
                <h3>{titre}</h3>
                <img className='upDown' src={down} alt="fleche bas" />
            </button>
            <p className='contenant'>{contenant}</p>
        </div>
    ) : (
        <div className='dropdown'>
            <button className='action' onClick={() => setIsOpen(true)}>
                <h3>{titre}</h3>
                <img className='upDown' src={up} alt="fleche haut" />
            </button>
        </div>
    )
}

export default Dropdown