import React from 'react';
import { IconButton } from '@material-ui/core';

import pdsLogo from '../../assets/images/pds-logo.png';
import PersonIcon from '@material-ui/icons/Person';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import './style.css';

export default function Menu() {
  return (
    <header>
      <div className="info-header">
        <img src={pdsLogo} alt="Logo PD Soluções" />
        <h4>PD System</h4>
        <div className="icones-header">
          <div>
            <IconButton size="small">
              <PersonIcon/>
              <p>Olá, usuário</p>
            </IconButton>
          </div>
          <div>
            <IconButton size="small">
              <ExitToAppIcon/> 
              <p>Sair</p>
            </IconButton>        
          </div>
        </div>
      </div>
    </header>
  );
}