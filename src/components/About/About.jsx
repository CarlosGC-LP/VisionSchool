import './About.css'

function About() {
    return (
        <div className='about' id='about'>
            <div className='about__imagen'>
                <img src={require(`../../image/imagen_about.png`)} alt="Imagen about"></img>
            </div>
            <div className='about__texto'>
                <h2>About</h2>
                <p>
                    VisionSchool es una plataforma innovadora que utiliza Machine Learning para predecir la deserción escolar en Educación Básica Regular. 
                    A través de dashboards dinámicos, ofrece análisis en tiempo real, permitiendo intervenciones tempranas y mejorando el futuro educativo de los estudiantes.
                </p>
            </div>
        </div>
    )
}

export default About