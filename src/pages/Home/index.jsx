import './style.css'
import image from './IMG.svg'
import Thumb from '../../components/Thumb';
import Logements from '../../datas/logements.json'
import Banner from '../../components/Banner';

function Home() {
  return (
    <div className="_Body">

      <Banner image= {image} text= "Chez vous, partout et ailleurs" />

      <section className='Gallery'>
          {Logements.map(({id, title, cover}) => (<Thumb key={id} id= {id} title= {title} cover = {cover}/>))}
      </section>
    </div>
  );
}

export default Home;
