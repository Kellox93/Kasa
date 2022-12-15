import './styles/Tags.css'

function Tags (tags){
    const Tags = tags.Tags
    return (
        <div className="Tags">
            {Tags.map((Tag) => (
                <div className='Tag' key={Tag}>
                    <p className='textTag'>{Tag}</p>
                </div>
            ))}
        </div>
    )
}

export default Tags