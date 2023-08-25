import './comp5.css'; //Se importa el CSS de la misma carpeta

//este componente muestra un titulo y un texto

function Description(){
    return (
        <div className="Description">
            <h3>Quienes somos</h3>
            <p>Somos un vivero que vende cactus de varios tipos. Entre los cuales podrás encontrar
                cactus de baja o muy baja frecuencia de riego
            </p>
        </div>
    );
}
export default Description;