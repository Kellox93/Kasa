import { Navigate, useParams } from 'react-router-dom'
import datas from '../../datas/logements.json'
import Carrousel from '../../components/Carrousel'
import Tags from '../../components/Tags'
import Rating from '../../components/Rating'
import Dropdown from '../../components/Dropdown'
import './style.css'

 
function Fiche_Logement() {
    const idUrl = useParams().id
    function id (Logements) {
        return Logements.id === idUrl;
      }
    const Logement = datas.find(id);
    

    if (Logement === undefined){return <Navigate to="/*" replace={true}/>}
    else { return (
        <div className='_Body'>

            <Carrousel cover={Logement.pictures}/>

            <section className='section2'>
                <div className='Logement' >
                    <div className='Titre'>
                        <h1>{Logement.title}</h1>
                        <p className='location'>{Logement.location}</p>
                    </div>
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

            <section className='section3'>
                <div className='fiche' >
                    <Dropdown 
                        titre= 'Description'
                        contenant= {Logement.description}
                    />
                </div>    
                <div className='fiche'>   
                    <Dropdown 
                        titre='Équipements'
                        contenant={
                        Logement.equipments.map((equipment) => <li key={equipment}>{equipment}</li>)
                        }
                    />
                </div> 
            </section>

        </div>
    )}
}

export default Fiche_Logement