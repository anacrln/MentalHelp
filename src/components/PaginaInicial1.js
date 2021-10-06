import React from 'react';
import '../css/PaginaInicial1.css';
import imagemPaginaInicial1 from '../img/imagemPaginaInicial1.png';

function PaginaInicial1(){
  return (
    <>
     <div className="flex-container">
       <div>
         <h1>Cuide-se compartilhando suas experiencias!</h1>
         <p>O Mental Help oferece caminhos e dicas para você desenvolver suas capacidades e levar uma vida mais leve e saudável com foco no seu emocional. Comece sua jornada hoje mesmo!</p>
        <button>Cadastre-se</button>
        <button>Veja alguns diários</button>
       </div>
       <div>
        <img src={imagemPaginaInicial1} alt="" />
       </div>
     </div>
    </>
  )
}

export default PaginaInicial1;