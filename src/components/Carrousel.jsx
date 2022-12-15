import './styles/Carrousel.css'
import Gauche from './assets/gauche.png'
import Droite from './assets/droite.png'

function Carrousel (cover){
    const Photo = cover.cover;
    let i = 0;
    let Apercu = Photo[i];
    let numeroPhoto = Photo.indexOf(Apercu) + 1;

    function droiteClick(){
        if (i < Photo.length - 1 ){
            i++;
            Apercu = Photo[i];
            numeroPhoto = Photo.indexOf(Apercu) + 1;
            console.log(i);
            return (
                document.getElementsByClassName('CarrouselImage ')[0].setAttribute('src', Apercu),
                document.getElementsByClassName('NumeroPhoto')[0].innerHTML = numeroPhoto + "/" + Photo.length
                )

        }
        else{
            i = 0;
            Apercu = Photo[i];
            numeroPhoto = Photo.indexOf(Apercu) + 1;
            console.log(i)
            return (
                document.getElementsByClassName('CarrouselImage ')[0].setAttribute('src', Apercu),
                document.getElementsByClassName('NumeroPhoto')[0].innerHTML = numeroPhoto + "/" + Photo.length
            )
        };
    };
    
    function gaucheClick(){
        if (i === 0){
            i = Photo.length - 1;
            Apercu = Photo[i];
            numeroPhoto = Photo.indexOf(Apercu) + 1;
            console.log(i);
            return (
                document.getElementsByClassName('CarrouselImage ')[0].setAttribute('src', Apercu),
                document.getElementsByClassName('NumeroPhoto')[0].innerHTML = numeroPhoto + "/" + Photo.length
            )
        }
        else{
            i -= 1;
            Apercu = Photo[i];
            numeroPhoto = Photo.indexOf(Apercu) + 1;
            console.log(i);
            return (
                document.getElementsByClassName('CarrouselImage ')[0].setAttribute('src', Apercu),
                document.getElementsByClassName('NumeroPhoto')[0].innerHTML = numeroPhoto + "/" + Photo.length
            )
        }
    };

    return (
        <section className='section1'>
            <div className="Carrousel">
                <img src={Apercu} alt="appartement" className='CarrouselImage'/>
                <input type="image" className='Droite' alt="fleche droite" src={Droite} onClick={() => {droiteClick(i);}}/>
                <input type="image" className='Gauche' alt="fleche gauche" src={Gauche} onClick={() => {gaucheClick(i);}}/>
                <p className='NumeroPhoto'>{numeroPhoto}/{Photo.length}</p>
            </div>
        </section>
    )
};

export default Carrousel