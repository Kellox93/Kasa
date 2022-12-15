import { useParams } from 'react-router-dom'
import datas from '../../datas/logements.json'
import Carrousel from '../../components/Carrousel'
import Tags from '../../components/Tags'
import Rating from '../../components/Rating'
import './style.css'

 
function Fiche_Logement() {
    const idUrl = useParams().id

    function id (Logements) {
        return Logements.id === idUrl;
      }
    const Logement = datas.find(id);
    const Pictures = Logement.pictures;

    return (
        <div className='_Body'>
            <Carrousel cover={Pictures}/>
            <section className='section2'>
                <div className='Titre'>
                    <h1>{Logement.title}</h1>
                    <p className='location'>{Logement.location}</p>
                    <Tags Tags={Logement.tags}/>
                </div>
                <div className='Host'>
                    <div className='Profile'>
                        <p className='name'>{Logement.host.name}</p>
                        <img className='PhotoProfile' src={Logement.host.picture} alt="Profile" />
                    </div>
                    <Rating Rating={Logement.rating}/>
                </div>
            </section>
        </div>
    )
}

export default Fiche_Logement