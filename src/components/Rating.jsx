import starRose from './assets/starRose.svg'
import starGrise from './assets/starGrise.svg'
import './styles/Rating.css'

function Rating (rating) {
    const rangStar = [1, 2, 3 ,4 , 5]
    return (
        <div className='Rating'>
			{rangStar.map((rang, index) =>
				rang <= rating.Rating ? 
					<img key={index} className='star' src={starRose} alt='etoile rose'/>
				 : <img key={index} className='star' src={starGrise} alt='etoile grise'/>
			)}
		</div>
    )
}

export default Rating