import logo_TeamTask from '../assets/logo teamtask sin palabras.PNG'
import '../assets/styles/Seccion_Registro.css'

export default function LoginPag() {
    return(
        <section className='registro-container'>
            <div className='registro-form'>
                <div className='registro-header'>
                    <img src={logo_TeamTask} alt="logo teamtask" className='registro-logo' />
                    <h2>Iniciar Seccion</h2>
                </div>
                <form className='registro-formulario'>
                    <input type="email" placeholder='Correo electronico' />
                    <input type="password" placeholder='Contraseña' />
                    <button className='btn btn-principal'>Iniciar Seccion</button>
                    <button className='btn btn-google'>Iniciar seccion con Google</button>
                    <button className='btn btn-microsoft'>Iniciar seccion con Microsoft</button>
                </form>
            </div>
        </section>
        
    )
}