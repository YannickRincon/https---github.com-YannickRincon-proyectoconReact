import './comp8.css'; //Se importa el CSS de la misma carpeta

//Se crea un componente que muestra un titulo y un texto
function Contact(){
    return (
        <div className='Contact'>
            <h3>Información de contacto</h3>
            <p>Teléfono: 555 5555 5555 <br></br>
                Email: yancactus@yancactus.com
            </p>
        </div>
    );
}
export default Contact;