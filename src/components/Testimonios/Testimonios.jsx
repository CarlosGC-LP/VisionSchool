import './Testimonios.css'

function Testimonios(props) {
    return (
        <div className='testimonios__contenido--card' id='testimonios'>
            <img src={require(`../../image/${props.imagen}.png`)} alt={`${props.alt}`}/>
            <p>{props.texto}</p>
        </div>
    )
}

export default Testimonios