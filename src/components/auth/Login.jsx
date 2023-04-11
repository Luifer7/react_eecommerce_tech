import { useContext, useState } from "react";
import {Link} from 'react-router-dom';
import { myAuthContext } from "../../context/authContext";

// import '../../styles/index.css';

const Login = () => {

    const {userLogin} = useContext(myAuthContext)

    // State para iniciar Sesión
    const [usuario, guardarUsuario] = useState({
        email: '',
        password: ''
    });

    // Extraer de usuario
    const {email, password} = usuario;

    const onChange = e => {
        guardarUsuario({
            ... usuario,
            [e.target.name]: e.target.value
        });
    }

    // Cuando el usuario quiere iniciar sesión
    const onSubmit = e => {
        e.preventDefault();
        userLogin(usuario)
    }

    const bgAuthPage = {
        backgroundColor: '#0093E9',
        backgroundImage: 'linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)'
    }

    return (
        <div className="form-usuario" style={bgAuthPage}>
            <div className="contenedor-form sombra-dark">
                <h3 className="headingForm">Iniciar Sesión</h3>

                <form 
                    onSubmit={onSubmit}
                >
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        placeholder="Tu Email"
                        value={email} 
                        onChange={onChange} 
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input 
                        type="password" 
                        name="password" 
                        id="password" 
                        placeholder="Tu Password"
                        value={password}
                        onChange={onChange} 
                        />
                    </div>

                    <div className="campo-form">
                        <input type="submit" className="bton btn-primario bton-block" value="Iniciar Sesión" />
                    </div>
                </form>

                <Link to={'/register'} className='enlace-cuenta'>
                    Obtener Cuenta
                </Link>

            </div>
        </div>
    );
  }
  
  export default Login;
  
  
  