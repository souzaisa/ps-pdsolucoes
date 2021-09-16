import React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

import './style.css';

export default function Navegacao() {
  return (
    <div className="navegacao">
      <Breadcrumbs separator={<NavigateNextIcon fontSize="medium" />} aria-label="breadcrumb">
        <Link color="inherit" href="/">
          Cliente
        </Link>
        <Typography color="textPrimary">Projetos</Typography>
      </Breadcrumbs>
    </div>
  );
}
