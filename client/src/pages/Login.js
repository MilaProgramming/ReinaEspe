import { useState } from "react";
import { useEffect } from 'react';
import  React from 'react';
import axios from "axios";
import "./Login.css";
import App from "../App";
import { FaUser, FaLock } from 'react-icons/fa';

function Login() {
  
  const [usuario, setUsuario] = useState("");
  const [clave, setClave] = useState("");
  const [lista,setlista] = useState([]); 

  useEffect(() => {
    axios.get("http://localhost:3001/api/getLogin", {
      params: {
        USUARIO_USERNAME: usuario,
        USUARIO_CONTRASENA: clave
      }
    }).then(function (response) {
      setlista(response.data);
      console.log(response.data);
    });
  }, []);

  const validar = () => {
      const encontrado = lista.find((val) => val.USUARIO_USERNAME === usuario && val.USUARIO_CONTRASENA === clave);
      if(encontrado){
        window.location.href = './Carousel';
          alert("Bienvenido " + encontrado.USUARIO_NOMBRE);
         
      }else{
          alert("Usuario o contraseña incorrecta");
      }
    }

  return (
    <div className="Login">
      <div className="contenedorPrincipal">
        <div className="loginContainer">
          <div className="frmpantnegra">
            <img
              className="logoespereina-icon"
              alt=""
              src="/logoespereina.png"
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
                <input type="text" id="usuario" name="usuario" placeholder="Usuario" onChange={(e)=>setUsuario(e.target.value)}/>
            </div>
            <div className="input-container">

              <label>
                Contraseña <span className="espacio"></span>
                <span className="icono"><FaLock /></span>
              </label>
              <input type="password" id="clave" name="clave" placeholder="Contraseña" onChange={(e)=>setClave(e.target.value)}/> 
            </div>


            <button className="loginBut" value="Iniciar Sesión"  onClick={validar}>
            <p>Iniciar Sesión</p>
            </button>

          </div>
        </div>
        <div class="rectanguloverde">
          <img
            className="siluetareina-icon"
            alt=""
            src="/siluetareina.png"
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
