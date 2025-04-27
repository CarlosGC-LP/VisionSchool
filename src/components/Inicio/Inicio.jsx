import './Inicio.css';

function Inicio() {
    return (
        <div className="inicio" id='inicio'>
            <div className='inicio__texto'>
                <h2>
                    Anticipamos el riesgo, cuidamos el futuro educativo
                </h2>
                <button className='inicio__texto-btn'>Descubre VisionSchool</button>
            </div>
            <div className='inicio__imagen'>
                <img src={require(`../../image/imagen_inicio.png`)} alt="Imagen inicio"></img>
            </div>
        </div>
    )
}

export default Inicio;