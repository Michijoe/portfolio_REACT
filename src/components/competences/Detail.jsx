function Detail({ icon, name, level }) {
    const Icon = icon;
    return (
        <article className='experience__details'>
            <Icon className='experience__details-icon' />
            <div>
                <h4>{name}</h4>
                <small className='text-light'>{level}</small>
            </div>
        </article>
    )
}

export default Detail