import './Home.css'
import Header from '../../components/Header/Header.jsx';
import Herramientas from '../../components/Herramientas/Herramientas.jsx'
import Inicio from '../../components/Inicio/Inicio.jsx'
import About from '../../components/About/About.jsx'
import Testimonios from '../../components/Testimonios/Testimonios.jsx'
import Footer from '../../components/Footer/Footer.jsx'

function Home() {
    return (
        <div className='app'>
            <Header/>
            <Inicio/>

            <div className='herramientas__contenido'>
                <h2>Herramientas</h2>

                <div className='herramientas__contenido--cards'>
                <Herramientas
                    imagen='grafico_predicion'
                    alt='Gráfico de predicción'
                    titulo='Predicción de deserción escolar'
                    texto='Utilizamos aprendizaje automatico para prever abandonos escolares'
                />
                <Herramientas
                    imagen='grafico_datos'
                    alt='Gráfico de análisis'
                    titulo='Análisis de datos'
                    texto='Obtén información detallada a traves de dashboards intuitivos'
                />
                <Herramientas
                    imagen='alerta'
                    alt='alertas tempranas'
                    titulo='Alertas tempranas'
                    texto='Identifica a los estudiantes en riezgo potencialmente'
                />
                </div>
            </div>

            <About/>

            <div className='testimonios'>
                <h2>Testimonios</h2>

                <div className='testimonios__contenido'>
                <Testimonios
                    imagen='testimonio1'
                    alt='testimonio 1'
                    texto='Muy facil de usar'
                />
                <Testimonios
                    imagen='testimonio2'
                    alt='testimonio 2'
                    texto='Cumple con su proposito'
                />
                <Testimonios
                    imagen='testimonio3'
                    alt='testimonio 3'
                    texto='Tiene todo lo que busco al filtrar'
                />
                <Testimonios
                    imagen='testimonio4'
                    alt='testimonio 4'
                    texto='Encontre mi espacio facilmente'
                />
                </div>
            </div>

            <Footer/>
        </div>
    )
}

export default Home