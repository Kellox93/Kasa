

function Banner ({image, text}) {
    return (
        <section className='_Section1'>
            <div className='black'></div>
            <p className='text'>{text}</p>
            <img src={image} alt='Nature' className='IMG' />
        </section>
    )
}

export default Banner