import { Link } from "react-router-dom"
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './Login.css';

function Login() {
    return (
        <div className='login'>
            <Header/>

            <div className='login__contenido'>
                <div className='login__contenido--logo'>
                    <h2>Inicia sesión</h2>
                    <img src={require(`../../image/imagen_about.png`)} alt="Logo VisionSchool"></img>
                </div>

                <div className='login__contenido--formulario'>
                    <button className="google-btn">
                        <div className="google-icon-wrapper">
                            <img
                            className="google-icon"
                            src={require(`../../image/google.png`)}
                            alt="Google logo"
                            />
                        </div>
                        <p className="btn-text"><b>Continue with Google</b></p>
                    </button>
                    <p className='or'>or</p>
                    <form className='login__contenido--formulario--form'>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required></input>

                        <label htmlFor="password">Contraseña</label>
                        <input type="password" id="password" name="password" required></input>

                        <button type="submit">Iniciar sesión</button>
                    </form>
                    <div className='login__contenido--formulario--olvidar'>
                        <p>Reset password</p>
                        <p>¿No tienes cuenta? <Link to="/Register">Create one</Link></p>
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
    )
}

export default Login;