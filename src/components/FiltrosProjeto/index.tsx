import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

import './style.css';

const responsaveis = ['Responsável', 'Wellinton', 'Bela', 'João'];
const status = ['Status', 'Em Progresso', 'Pausado', 'Finalizado', 'Cancelado'];

export default function FiltrosProjeto() {
  
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLDivElement>(null);
  const [selectedRespon, setSelectedRespon] = React.useState(0);

  const [openStatus, setOpenStatus] = React.useState(false);
  const anchorRefStatus = React.useRef<HTMLDivElement>(null);
  const [selectedStatus, setSelectedStatus] = React.useState(0);


  const handleClick = () => {
    console.info(`You clicked ${responsaveis[selectedRespon]}`);
  };
  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>,
    index: number,
  ) => {
    setSelectedRespon(index);
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const handleClose = (event: React.MouseEvent<Document, MouseEvent>) => {
    if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
      return;
    }

    setOpen(false);
  };

  const handleClickStatus = () => {
    console.info(`You clicked ${status[selectedStatus]}`);
  };
  const handleMenuItemClickStatus = (
    eventStatus: React.MouseEvent<HTMLLIElement, MouseEvent>,
    indexStatus: number,
  ) => {
    setSelectedStatus(indexStatus);
    setOpenStatus(false);
  };
  const handleToggleStatus = () => {
    setOpenStatus((prevOpen) => !prevOpen);
  };
  const handleCloseStatus = (event: React.MouseEvent<Document, MouseEvent>) => {
    if (anchorRefStatus.current && anchorRefStatus.current.contains(event.target as HTMLElement)) {
      return;
    }
    setOpenStatus(false);
  };

  return (
    <Grid container direction="column" className="filtrosProjeto">
      <Grid item xs={12}>
        <ButtonGroup variant="contained" color="primary" ref={anchorRef} aria-label="split button">
          <Button onClick={handleClick}>{responsaveis[selectedRespon]}</Button>
          <Button
            size="small"
            aria-controls={open ? 'split-button-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-label="select merge strategy"
            aria-haspopup="menu"
            onClick={handleToggle}
          >

            <KeyboardArrowDownIcon />
          </Button>
        </ButtonGroup>
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList id="split-button-menu">
                    {responsaveis.map((responsaveis, index) => (
                      <MenuItem
                        key={responsaveis}
                        disabled={index === 0}
                        selected={index === selectedRespon}
                        onClick={(event) => handleMenuItemClick(event, index)}
                      >
                        {responsaveis}
                      </MenuItem>
                    ))}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
        
        <ButtonGroup variant="contained" color="primary" ref={anchorRefStatus} aria-label="split button">
          <Button onClick={handleClickStatus}>{status[selectedStatus]}</Button>
          <Button
            size="small"
            aria-controls={openStatus ? 'split-button-menu' : undefined}
            aria-expanded={openStatus ? 'true' : undefined}
            aria-label="select merge strategy"
            aria-haspopup="menu"
            onClick={handleToggleStatus}
          >
            <KeyboardArrowDownIcon />
          </Button>
        </ButtonGroup>
        <Popper open={openStatus} anchorEl={anchorRefStatus.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleCloseStatus}>
                  <MenuList id="split-button-menu">
                    {status.map((status, indexStatus) => (
                      <MenuItem
                        key={status}
                        disabled={indexStatus === 0}
                        selected={indexStatus === selectedStatus}
                        onClick={(eventStatus) => handleMenuItemClickStatus(eventStatus, indexStatus)}
                      >
                        {status}
                      </MenuItem>
                    ))}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper> 
      </Grid>
    </Grid>
  );
}
