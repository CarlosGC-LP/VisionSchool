import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import { Link } from 'react-router-dom';
import './Register.css'

function Register() {
    return (
        <div className='register'>
            <Header/>
            
            <div className='register__contenido'>
                <div className='register__contenido--logo'>
                    <h2>Registro</h2>
                    <img src={require(`../../image/imagen_about.png`)} alt="Logo VisionSchool"></img>
                </div>

                <div className='register__contenido--formulario'>
                    <form className='register__contenido--formulario--form'>
                        <label htmlFor="nombre">Nombre</label>
                        <input type="nombre" id="nombre" name="nombre" required></input>

                        <label htmlFor="apellido">Apellido</label>
                        <input type="apellido" id="apellido" name="apellido" required></input>

                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required></input>

                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" required></input>

                        <button type="submit">Registrar</button>
                        
                        <div className='login-link'>
                            <Link to='/login'>Login</Link>
                        </div>
                    </form>
                </div>
            </div>

            <Footer/>
        </div>
    )
}

export default Register