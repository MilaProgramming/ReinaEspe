import "./FrmLogin.css";
const FrmLogin = () => {
  return (
    <div className="frmlogin">
      <div className="frmpantnegra">
        <img
          className="logoespereina-icon"
          alt=""
          src="/logoespereina-1@2x.png"
        />
      </div>
      <div className="txtiniciarsesion-wrapper">
        <label className="txtiniciarsesion">
          <div className="iniciar-sesin">Iniciar Sesión</div>
        </label>
      </div>
      <div className="formulariologin">
        <div className="lblcontrasena-parent">
          <input className="lblcontrasena" type="password" />
          <input className="lblusuario" type="text" />
          <div className="grupoiconusu">
            <div className="usuario">Usuario</div>
            <img className="iconousuario" alt="" src="/iconousuario@2x.png" />
          </div>
          <div className="grupoiconcan">
            <div className="contrasea">Contraseña</div>
            <img className="iconobloquear" alt="" src="/iconobloquear@2x.png" />
          </div>
          <input
            className="lblcontrasena1"
            type="text"
            placeholder="Contraseña"
          />
          <input className="lblusuario1" type="text" placeholder="Usuario" />
        </div>
        <button className="boton">
          <div className="lbliniciarsesion-wrapper">
            <div className="lbliniciarsesion">Iniciar Sesión</div>
          </div>
        </button>
      </div>
      <div className="frmpantverde-wrapper">
        <div className="frmpantverde">
          <img
            className="siluetareina-icon"
            alt=""
            src="/siluetareina@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default FrmLogin;
