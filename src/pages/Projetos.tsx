import React from "react";
import { Container } from "@material-ui/core";

import Menu from "../components/Header";
import Navegacao from '../components/Navegacao';
import InputPesquisa from '../components/InputPesquisa';
import FiltrosProjeto from '../components/FiltrosProjeto';
import CardProjeto from '../components/CardProjeto';

import '../styles/projetos.css';

export default function Projetos(){
    return(
        <div>
            <Menu/>
            <Navegacao/>
            <Container>
                <div className="filtros">
                    <InputPesquisa/>
                    <FiltrosProjeto/>
                </div>
                <CardProjeto/>   
            </Container>
            
           
        </div>

    )
}