import React from "react";

import userPhoto from '../../assets/images/perfil.png';
import ReorderIcon from '@material-ui/icons/Reorder';

import projetos from '../../data/projetos';

import './style.css';

export default function CardProjeto(){

    function getProjetos(){
        return projetos.map(proj => {
                return <div key={proj.id} className="cardProjeto">
                <div className="cardProjeto-conteudo">
                    <div className="info-inicial">
                        <h3>{proj.nome}</h3>
                        <img src={userPhoto} alt="Foto do(a) responsável" />
                    </div>
                    <div className="cardProjeto-descricao">
                        <div className="titulo-descricao">
                            <ReorderIcon/>
                            <h4>Descrição</h4>
                        </div>
                        <p>{proj.descricao}</p>
                    </div>
                        <h5 className="status" style={{color: proj.color}}>{proj.status}</h5>
                </div>
            </div>
        })
    }

    return (
        <div className="cards">
            {getProjetos()}
        </div>    
    )
}