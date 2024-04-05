import React from 'react';
import imagenFondo from '../assets/images/404.jpeg';

function NotFound(){
    return(
        <div className="text-center">
            <br></br>
            <h1>Página no encontrada</h1>
            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 30 +'rem'}} src={imagenFondo} alt=" Star Wars - Mandalorian "/>
        </div>
        
    )
}


export default NotFound;