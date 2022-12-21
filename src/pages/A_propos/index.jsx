import './style.css'
import Dropdown from '../../components/Dropdown';
import Banner from '../../components/Banner';
import image from '../../components/assets/Nature2.png'

function APropos () {
    return (
        <div className='_Body'>
            <Banner image={image}/>
            <div className='a_propos'>
                <Dropdown 
                    titre="Fiabilité"
                    contenant="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
                />
            </div>
            <div className='a_propos'>
                <Dropdown 
                    titre="Respect"
                    contenant="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
                />
            </div>
            <div className='a_propos'>   
                <Dropdown 
                    titre="Serviceé"
                    contenant="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
                />
            </div>
            <div className='a_propos'>
                <Dropdown 
                    titre="Sécurité"
                    contenant="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
                />
            </div>
        </div>
    )
}

export default APropos;