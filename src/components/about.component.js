import React from 'react';
import '../styles/about.css';
import profileImage from '../images/yolo.jpg';

function Profile() {
    return (
        <div className="profile-container">
            <div className="profile-image">
                <img src={profileImage} alt="Profile" />
            </div>
            <div className="profile-details">
                <h1 className="profile-name">Yolotzin Groth Hernandez</h1>
                <h2 className="profile-matricula">MATRICULA: s20020311</h2>
               <p>Hola! Soy una amante de la fotografia de naturaleza y retrato
               <br />Te invito a vistitar mi galeria de clips y a que me sigas en Instragram @groth.yolo<br />
                donde podras ver todas mis fotografias y agendar tu sesiones ¡Ahi te espero!</p>

        
            </div>
        </div>
    );
}

export default Profile;
