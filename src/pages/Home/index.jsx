import './style.css'
import image from './IMG.svg'
import Thumb from '../../components/Thumb';
import Logements from '../../datas/logements.json'

function Home() {
  return (
    <div className="_Body">

      <section className='_Section1'>
        <div className='black'></div>
        <p className='text'>Chez vous, partout et ailleurs</p>
        <img src={image} alt='Nature' className='IMG' />
      </section>

      <section className='Gallery'>
          {Logements.map(({id, title, cover}) => (<Thumb id= {id} title= {title} cover = {cover}/>))}
      </section>
    </div>
  );
}

export default Home;
