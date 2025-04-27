import './Herramientas.css';

function Herramientas(props) {
    return (
        <div className='herramientas'>
            <img className='herramientas__imagen' src={require(`../../image/${props.imagen}.png`)} alt={`${props.alt}`}></img>
            <div className='herramientas__texto'>
                <h3>{props.titulo}</h3>
                <p>{props.texto}</p>
            </div>
        </div>
    )
}

export default Herramientas;