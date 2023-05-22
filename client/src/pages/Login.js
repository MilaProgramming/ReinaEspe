import "../styles/Login.css";
import { FaUser, FaLock } from 'react-icons/fa';

function Login() {
  return (
    <div className="Login">
<div className="contenedorPrincipal">
      <div className="loginContainer">
          <div className="frmpantnegra">
            <img
              className="logoespereina-icon"
              alt=""
              src= {require("../assets/logoespereina.png")}
            />
          </div>


        <div>
        <h1 className="iniciar-sesin">Iniciar Sesión
        </h1>
        </div>
      <div className="contenedorFormulario">
        <div className="input-container">
        
          <label> 
            Usuario <span className="espacio"></span>  
            <span className="icono"><FaUser /></span></label>
          <input type="text" placeholder="Usuario" name="uname" required />
          {/* {renderErrorMessage("uname")} */}
        </div>
        <div className="input-container">
        
          <label>
            Contraseña <span className="espacio"></span>
          <span className="icono"><FaLock /></span>
          </label>
          <input type="password"  placeholder="Contraseña" name="pass" required />
          {/* {renderErrorMessage("pass")} */}
        </div>

  
        <button className="loginBut">
          <p>Iniciar Sesión</p>
        </button>
        </div>
      </div>
      <div class="rectanguloverde">
          <img
            className="siluetareina-icon"
            alt=""
            src= {require("../assets/siluetareina.png")}
          />
      </div>
    </div>
    </div>
  );
}

export default Login;
