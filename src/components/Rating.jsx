import starRose from './assets/starRose.svg'
import starGrise from './assets/starGrise.svg'
import './styles/Rating.css'

function Rating (rating) {
    const rangStar = [1, 2, 3 ,4 , 5]
    return (
        <div>
			{rangStar.map((rang) =>
				rang <= rating.Rating ? 
					<img className='star' src={starRose} alt='etoile rose'/>
				 : <img className='star' src={starGrise} alt='etoile rose'/>
			)}
		</div>
    )
}

export default Rating