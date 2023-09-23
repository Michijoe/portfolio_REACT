function Detail({ icon, name, level }) {
    const Icon = icon;
    return (
        <article className='competence__details'>
            <Icon className='competence__details-icon' />
            <div>
                <h4>{name}</h4>
                <small className='text-light'>{level}</small>
            </div>
        </article>
    )
}

export default Detail